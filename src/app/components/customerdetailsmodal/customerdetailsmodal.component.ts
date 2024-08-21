import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, tap } from 'rxjs/operators';
import { ApiService } from 'src/app/api.service';
declare var $: any;

@Component({
  selector: 'app-customerdetailsmodal',
  templateUrl: './customerdetailsmodal.component.html',
  styleUrls: ['./customerdetailsmodal.component.css'],
})
export class CustomerdetailsmodalComponent implements OnInit {
  tripInfo: any = {
    c_email: '',
    c_first_name: '',
    c_last_name: '',
    passenger: [],
  };
  passengerForm!: FormGroup;
  bookingInfo!: any;
  trip_Info: any = { fares: [{ price: 0 }] }; // Initialize with default price
  basePrice: number = 0; // To hold the base price for calculations
  totalPrice: number = 0; // To hold the total price for display
  isLoading = false;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.apiService.getFormData().subscribe((formData) => {
      if (formData) {
        const numberOfPassengers = parseInt(formData.passengers, 10);
        this.initForm(numberOfPassengers);

        this.apiService.tripData$
          .pipe(
            filter((res) => res !== null),
            tap((res) => {
              if (res.data) {
                this.trip_Info = res.data[0];
                this.basePrice = this.trip_Info.fares[0].price;
                this.updatePriceBasedOnPassengers(this.passengersArray.length);
              } else {
                console.warn('No data found');
              }
            })
          )
          .subscribe();
      }
    });

    this.apiService.modalTrigger$.subscribe((modalId: string) => {
      $(modalId).modal('show');
    });

    this.apiService.bookingData$.subscribe((res) => {
      if (res) {
        this.bookingInfo = res.data;
        console.log('Updated booking data:', this.bookingInfo);
      }
    });
  }

  initForm(numberOfPassengers: number) {
    this.passengerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      passengers: this.fb.array([], Validators.required),
    });

    this.updatePassengers(numberOfPassengers);
  }

  get passengersArray(): FormArray {
    return this.passengerForm.get('passengers') as FormArray;
  }

  addPassenger() {
    this.passengersArray.push(
      this.fb.group({
        name: [''],
        phone: [''],
      })
    );

    // Update price after adding a passenger
    this.updatePriceBasedOnPassengers(this.passengersArray.length);
  }

  updatePassengers(numberOfPassengers: number) {
    const passengerArray = this.passengerForm.get('passengers') as FormArray;

    // Clear any existing controls
    passengerArray.clear();

    // Create form groups for each passenger
    for (let i = 0; i < numberOfPassengers; i++) {
      passengerArray.push(
        this.fb.group({
          name: [''],
          phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
        })
      );
    }

    // Update price based on the initial number of passengers
    this.updatePriceBasedOnPassengers(numberOfPassengers);
  }

  removePassenger(index: number) {
    const passengerArray = this.passengerForm.get('passengers') as FormArray;
    if (index > -1 && index < passengerArray.length) {
      passengerArray.removeAt(index);

      // Update price after removing a passenger
      this.updatePriceBasedOnPassengers(passengerArray.length);
    }
  }

  updatePriceBasedOnPassengers(passengerCount: number) {
    if (this.basePrice) {
      this.totalPrice = this.basePrice * passengerCount;
    }
  }

  tripReview() {
      if (!this.passengerForm) {
        console.error('Form is not initialized');
        return;
      }

    // Log the current form values
    console.log('Form Values:', this.passengerForm.value);
    // Ensure the form is valid before proceeding
    if (this.passengerForm.invalid) {
      console.log('Form is invalid');
      return; // Stop submission if the form is invalid
    }

    // Initialize tripInfo object with form data
    this.tripInfo.c_email = this.passengerForm.get('email')?.value;

    // Map passenger form data to tripInfo object
    this.tripInfo.passenger = this.passengerForm
      .get('passengers')
      ?.value.map((passenger: any) => ({
        name: passenger.name,
        mobile: passenger.phone,
      }));

    // Log the tripInfo object to check data before sending it
    console.log('Trip Info:', this.tripInfo);

    // Set loading state to true
    this.isLoading = true;

    // Hide the customer details modal
    $('#customerDetailsModal').modal('hide');

    // Trigger the payment modal
    this.apiService.triggerModal('#payForTicketModal');

    // Send the booking data to the API service
    this.apiService.booking(this.tripInfo).subscribe(
      (res) => {
        this.isLoading = false;
        console.log('Booking response:', res);
        // Optionally navigate or show a success message
      },
      (error) => {
        this.isLoading = false;
        console.error('Booking failed', error);
        // Optionally, show an error message to the user
      }
    );
  }

  closeCustomerdetailsModal() {
    $('#customerDetailsModal').modal('hide');
    this.apiService.triggerModal('#payForTicketModal');
  }
}
