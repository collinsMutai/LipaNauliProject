import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, tap, takeUntil, switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/api.service';
declare var $: any;

@Component({
  selector: 'app-customerdetailsmodal',
  templateUrl: './customerdetailsmodal.component.html',
  styleUrls: ['./customerdetailsmodal.component.css'],
})
export class CustomerdetailsmodalComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  bookingInfo: any;
  tripReviewInfo: any;
  passengerForm: FormGroup;
  user: string | null = null; // Initialize user as null

  constructor(
    private router: Router,
    private apiService: ApiService,
    private fb: FormBuilder
  ) {
    this.passengerForm = this.fb.group({
      email: ['john@gmail.com', [Validators.required, Validators.email]],
      primary_phone: ['87678276728782', Validators.required],
      firstName: ['john', Validators.required],
      lastName: ['doe', Validators.required],
      passengers: this.fb.array([]), // Initialize FormArray for passengers
    });
  }

  ngOnInit(): void {
    this.initializeSubscriptions();
    this.updateTotalPrice();
  }

  private initializeSubscriptions(): void {
    // Handle selected option changes and form data fetching
    this.apiService.selectedOption$
      .pipe(
        takeUntil(this.destroy$),
        tap((selectedOption) => {
          this.user = selectedOption;
          console.log('Selected option:', this.user);
        }),
        switchMap(() => this.apiService.getFormData()) // Fetch form data after selected option is set
      )
      .subscribe(
        (numberOfPassengers) => {
          if (numberOfPassengers !== null) {
            console.log('Fetched number of passengers:', numberOfPassengers);
            this.handleFormData(numberOfPassengers);
          } else {
            console.log('Form data is null or missing:', numberOfPassengers);
            this.updatePassengerArray(0);
          }
        },
        (error) => {
          console.error('Error fetching form data:', error);
        }
      );

    // Fetch trip data
    this.apiService.tripData$
      .pipe(
        filter((res) => res !== null),
        tap((res) => {
          this.bookingInfo = res.data[0];
          console.log('Trip data:', this.bookingInfo);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe(
        (res) => {
          // No additional handling needed if using tap for side effects
        },
        (error) => {
          console.error('Error fetching trip data:', error);
        }
      );

    // Handle modal trigger
    this.apiService.modalTrigger$.pipe(takeUntil(this.destroy$)).subscribe(
      (modalId) => {
        $(modalId).modal('show');
      },
      (error) => {
        console.error('Error handling modal trigger:', error);
      }
    );

    this.tripReviewInfo = this.apiService.getBookingBodyData();

    this.apiService.bookingData$
      .pipe(
        filter((res) => res !== null),
        tap((res) => {
          this.bookingInfo = res.data;
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.passengerForm.valueChanges
      .pipe(
        tap(() => this.updateTotalPrice()),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  private handleFormData(numberOfPassengers: number): void {
    const primaryPassenger =
      this.user === 'no'
        ? {
            name: '',
            phone: '',
          }
        : {};

    if (this.user === 'yes') {
      // Populate form fields for primary passenger
      this.passengerForm.patchValue({
        email: this.passengerForm.get('email')?.value || '',
        primary_phone: this.passengerForm.get('primary_phone')?.value || '',
        firstName: this.passengerForm.get('firstName')?.value || '',
        lastName: this.passengerForm.get('lastName')?.value || '',
      });

      // Update FormArray based on number of additional passengers
      this.updatePassengerArray(numberOfPassengers - 1);

      // Initialize FormArray with additional passengers
      const passengersArray = this.passengerForm.get('passengers') as FormArray;
      passengersArray.clear(); // Clear existing passengers

      for (let i = 0; i < numberOfPassengers - 1; i++) {
        passengersArray.push(
          this.fb.group({
            name: ['', Validators.required],
            phone: ['', Validators.required],
          })
        );
      }
    } else {
      // Populate form fields including primary passenger
      this.passengerForm.patchValue({
        email: this.passengerForm.get('email')?.value || '',
        primary_phone: this.passengerForm.get('primary_phone')?.value || '',
        firstName: primaryPassenger.name || '',
        lastName: primaryPassenger.phone || '',
      });

      // Set FormArray including primary passenger
      this.updatePassengerArray(numberOfPassengers + 1);
      const passengersArray = this.passengerForm.get('passengers') as FormArray;
      passengersArray.clear(); // Clear existing passengers

      // Add the primary passenger first
      passengersArray.push(
        this.fb.group({
          name: [primaryPassenger.name || '', Validators.required],
          phone: [primaryPassenger.phone || '', Validators.required],
        })
      );

      // Add remaining passengers to FormArray
      for (let i = 1; i < numberOfPassengers; i++) {
        passengersArray.push(
          this.fb.group({
            name: ['', Validators.required],
            phone: ['', Validators.required],
          })
        );
      }
    }
  }

  private updatePassengerArray(passengerCount: number): void {
    const passengersArray = this.passengerForm.get('passengers') as FormArray;
    passengersArray.clear(); // Clear the existing array

    // Calculate number of additional passengers
    let additionalPassengerCount = passengerCount;

    if (this.user === 'yes') {
      // Exclude the primary passenger if user is 'yes'
      additionalPassengerCount = Math.max(passengerCount, 0);
    } else {
      // Use the count directly if user is 'no'
      additionalPassengerCount = Math.max(passengerCount, 0);
    }

    // Initialize FormArray with additional passengers
    for (let i = 0; i < additionalPassengerCount; i++) {
      passengersArray.push(
        this.fb.group({
          name: ['', Validators.required],
          phone: ['', Validators.required],
        })
      );
    }
  }

  get passengers(): FormArray {
    return this.passengerForm.get('passengers') as FormArray;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  tripReview() {
    console.log('passengerForm', this.passengerForm.value);
    console.log('tripReviewInfo', this.tripReviewInfo);

    const totalPrice = this.calculateTotalPrice();

    // Determine primary passenger info
    const primaryPassenger =
      this.user === 'yes'
        ? {
            seat_id: '1',
            seat_name: '',
            seat_type: 'normal',
            ticketPrice: '1.00',
            flatTicketPrice: '1.00',
            currency: 'KES',
            flat_sale: 0,
            name: this.passengerForm.get('firstName')?.value || '',
            last_name: this.passengerForm.get('lastName')?.value || '',
            gender: '',
            age: '',
            mobileId: '254',
            mobile: this.passengerForm.get('primary_phone')?.value || '',
            nationality: 'Kenyan',
            id_no: '0000',
          }
        : null;

    const passengersArray = this.passengerForm.get('passengers')?.value.map(
      (passenger: any) =>
        ({
          seat_id: '1',
          seat_name: '',
          seat_type: 'normal',
          ticketPrice: '1.00',
          flatTicketPrice: '1.00',
          currency: 'KES',
          flat_sale: 0,
          name: passenger.name,
          last_name: passenger.name,
          gender: '',
          age: '',
          mobileId: '254',
          mobile: passenger.phone,
          nationality: 'Kenyan',
          id_no: '0000',
        } || [])
    );

    // Construct tripReviewInfo
    const tripReviewInfo = {
      ...this.tripReviewInfo,
      total: totalPrice,
      booking_date: "2024-09-16",
      passenger: [
        ...(primaryPassenger ? [primaryPassenger] : []),
        ...passengersArray,
      ],
    };

    console.log('tripReviewInfo', tripReviewInfo);

    this.apiService.booking(tripReviewInfo).subscribe((res) => {
      console.log(res);
    });

    $('#customerDetailsModal').modal('hide');
    this.apiService.triggerModal('#payForTicketModal');
  }

  closeCustomerdetailsModal() {
    $('#customerDetailsModal').modal('hide');
    this.apiService.triggerModal('#payForTicketModal');
  }

  addPassenger(): void {
    console.log('Adding new passenger');

    const passengersArray = this.passengerForm.get('passengers') as FormArray;
    passengersArray.push(
      this.fb.group({
        name: ['', Validators.required],
        phone: ['', Validators.required],
      })
    );
  }

  removePassenger(index: number): void {
    const passengersArray = this.passengerForm.get('passengers') as FormArray;
    if (passengersArray.length > 0) {
      passengersArray.removeAt(index);
    }
  }

  calculateTotalPrice(): number {
    const numberOfPassengers = this.passengers.length;
    const pricePerPassenger = this.bookingInfo?.fares[0]?.price || 0;

    const totalPassengers =
      this.user === 'yes' ? numberOfPassengers + 1 : numberOfPassengers;

    return totalPassengers * pricePerPassenger;
  }
  private updateTotalPrice(): void {
    const totalPrice = this.calculateTotalPrice();
    this.apiService.updateTotalPrice(totalPrice);
  }
}
