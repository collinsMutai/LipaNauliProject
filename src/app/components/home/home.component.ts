import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { ApiService } from 'src/app/api.service';
import Swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  sourceCities: any[] = [];
  destinationCities: any[] = [];
  selectedSourceCity: any;

  tripForm: FormGroup;
  isSubmitDisabled: boolean = true;

  sourceCityId: any;
  destinationCityId: any;

  sourceCity: any;
  destinationCity: any;

  display!: boolean;
  displayState: boolean;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.tripForm = this.fb.group({
      from: [''],
      to: [''],
      departure: [''],
      passengers: [1],
    });
  }
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  ngOnInit() {
    this.apiService.modalTrigger$.subscribe((modalId: string) => {
      $(modalId).modal('show');
    });
    // this.apiService.triggerModal('#customerDetailsModal');
    this.apiService.getSourceCity().subscribe((res) => {
      this.sourceCities = res.data;
    });

    const currentDate = new Date().toISOString().split('T')[0];
    this.tripForm.get('departure').setValue(currentDate);
  }

  selectedCity(selectedSourceCity: string) {
    this.selectedSourceCity = selectedSourceCity;
    const selectedCity = this.sourceCities.find(
      (city) =>
        city.city_name.toLowerCase() === this.selectedSourceCity.toLowerCase()
    );

    if (selectedCity) {
      const sourceCityId = selectedCity.id;

      this.apiService.getDestinationCity(sourceCityId).subscribe((res) => {
        this.destinationCities = res.data;
      });
    } else {
      Swal.fire('Source city not found.');
    }
  }
  selectedDestCity(selectedDestinationCity: string) {
    const selectedCity = this.destinationCities.find(
      (city) =>
        city.city_name.toLowerCase() === selectedDestinationCity.toLowerCase()
    );
    if (this.destinationCities.length === 0) {
      Swal.fire('Select destination city first.');
    }
    if (!selectedCity) {
      Swal.fire('Destination city not found.');
    }
  }

  bookTrip() {
    // this.apiService.triggerModal('#buslistModal');
    if (this.tripForm.valid) {
      const formData = this.tripForm.value;
      const departure = formData.departure;
      // console.log(formData);
      if (
        formData &&
        formData.from &&
        formData.to &&
        formData.departure &&
        formData.passengers
      ) {
        this.apiService.setFormData(formData.passengers);
      }

      this.sourceCity = this.sourceCities.find(
        (city) => city.city_name.toLowerCase() === formData.from.toLowerCase()
      );
      if (this.sourceCity) {
        this.sourceCityId = this.sourceCity.id;
      } else {
        console.error('Source city not found.');
      }

      this.destinationCity = this.destinationCities.find(
        (city) => city.city_name.toLowerCase() === formData.to.toLowerCase()
      );

      if (this.destinationCity) {
        this.destinationCityId = this.destinationCity.id;
      } else {
        Swal.fire('Destination city not found.');
        console.error('Destination city not found.');
      }

      if (this.sourceCity && this.destinationCity) {
        const tripData = {
          source_id: this.sourceCityId,
          destination_id: this.destinationCityId,
          booking_date: '2024-05-29',
          // booking_date: departure,
        };

        this.apiService.getAllTrip(tripData).subscribe((res) => {
          if (res.data[0]) {
            this.apiService.triggerModal('#buslistModal');

            this.apiService.setDisplayState(true);
          } else {
            Swal.fire(' Bus not found for the route.');
          }
        });

        //  this.tripForm.reset();
        //  this.destinationCities = [];
        //  this.selectedSourceCity = '';
      }
    }
  }

  closePayNowModal() {
    $('#payNowModal').modal('hide');
  }

  payNowTrip() {
    this.apiService.triggerModal('#payNowModal');
  }
  registrationHandler() {
    const tripInfo: any = {
      booking_date: '2024-05-04',
      vehicle_reg: 'kdf 002z',
    };
    this.apiService.getAllTrip(tripInfo).subscribe((res) => {
      console.log(res);
      $('#payNowModal').modal('hide');

      this.apiService.setDisplayState(true);
    });
  }

  loginUser() {
    this.apiService.triggerModal('#loginModal');
  }
}
