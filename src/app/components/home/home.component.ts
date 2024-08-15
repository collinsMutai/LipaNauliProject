import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { ApiService } from 'src/app/api.service';
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
      passengers: [''],
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
    this.apiService.getSourceCity().subscribe((res) => {
      this.sourceCities = res.data;
    });

    const currentDate = new Date();
    this.tripForm.get('departure').setValue({
      year: currentDate.getFullYear(),
      month: currentDate.getMonth() + 1,
      day: currentDate.getDate(),
    });
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
    }
  }

  bookTrip() {
    this.apiService.triggerModal('#buslistModal');
    if (this.tripForm.valid) {
      const formData = this.tripForm.value;
      const departure = formData.departure;

      this.sourceCity = this.sourceCities.find(
        (city) => city.city_name.toLowerCase() === formData.from.toLowerCase()
      );
      if (this.sourceCity) {
        this.sourceCityId = this.sourceCity.id;
      } 
      // else {
      //   console.error('Source city not found.');
      // }

      this.destinationCity = this.destinationCities.find(
        (city) => city.city_name.toLowerCase() === formData.to.toLowerCase()
      );

      if (this.destinationCity) {
        this.destinationCityId = this.destinationCity.id;
      } 
      // else {
      //   console.error('Destination city not found.');
      // }

      if (this.sourceCity && this.destinationCity) {
        const tripData = {
          source_id: this.sourceCityId,
          destination_id: this.destinationCityId,
          booking_date: '2024-05-29',
        };

        this.apiService.getAllTrip(tripData).subscribe((res) => {
          console.log(res);
          this.apiService.triggerModal('#buslistModal');
          this.apiService.setDisplayState(true);
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
