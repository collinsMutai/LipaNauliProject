import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    booking_date: '2024-08-05',
    route_id: '5',
    token: 'E8887142-7E2A-4327-B324-27B4402FAE2A',
    pickup_id: '4',
    return_id: '1',
    departure_time: '05:00 AM',
    paymentMethod: 'mpesa',
    bus_id: '69',
    currencyId: '1',
    ticket_cnt: '1',
    sub_total: '1.00',
    tax: '0',
    total: '1.00',
    is_luggage: false,
    c_address: '',
    c_city: '',
    c_state: '',
    c_zip: '',
    c_country: '',
    is_flat_offer: false,
    passenger: [
      {
        seat_id: '1',
        seat_name: '',
        seat_type: 'normal',
        ticketPrice: '1.00',
        flatTicketPrice: '1.00',
        currency: 'KES',
        flat_sale: 0,
        name: '',
        last_name: '',
        gender: '',
        age: '',
        mobileId: '254',
        mobile: '726097666',
        nationality: 'Kenyan',
        id_no: '0000',
      },
    ],
    isPromotional: false,
    promotionalTripMsg: '',
    seatSelectionLimit: '0',
    c_email: '',
    delayedFlag: false,
    delayedDate: '',
    bookedThrough: 'web',
    sourcetype: 'web',
  };

  bookingInfo!: any;
  trip_Info!: any;
  passengerForm!: FormGroup;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.apiService.modalTrigger$.subscribe((modalId: string) => {
      $(modalId).modal('show');
    });
    this.initForm();
    this.apiService.bookingData$.subscribe((res) => {
      if (res) {
        this.bookingInfo = res.data;
        console.log('Updated booking data:', this.bookingInfo);
      }
    });
    this.apiService.tripData$
      .pipe(
        filter((res) => res !== null),
        tap((res) => {
          if (res.data) {
            this.trip_Info = res.data[0];
            console.log(this.trip_Info);
          } else {
            console.warn('No data found');
          }
        })
      )
      .subscribe();
  }

  initForm() {
    this.passengerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['Male'], // Default to Male
      mobileId: ['', Validators.required], // Add this line
      mobile: ['', Validators.required],
      nationality: ['', Validators.required],
      idNo: ['', Validators.required],
    });
  }

  tripReview() {
    // if (this.passengerForm.valid) {
    $('#customerDetailsModal').modal('hide');
    this.apiService.triggerModal('#payForTicketModal');

    // Populate tripInfo with passenger form data
    this.tripInfo.c_email = this.passengerForm.get('email')?.value;
    this.tripInfo.passenger[0].name =
      this.passengerForm.get('firstName')?.value;
    this.tripInfo.passenger[0].last_name =
      this.passengerForm.get('lastName')?.value;
    this.tripInfo.passenger[0].gender = this.passengerForm.get('gender')?.value;
    // this.tripInfo.passenger[0].mobile = this.passengerForm.get('mobile')?.value;
    this.tripInfo.passenger[0].nationality =
      this.passengerForm.get('nationality')?.value;
    this.tripInfo.passenger[0].id_no = this.passengerForm.get('idNo')?.value;

    // const datetimeStr = this.tripInfo?.sort_time;
    // const dateStr = datetimeStr.split(' ')[0];
    // this.tripInfo.booking_date = dateStr;

    const tripInfoString = JSON.stringify(this.tripInfo);
    localStorage.setItem('user', tripInfoString);
    console.log('this.tripInfo', this.tripInfo);

    this.apiService.booking(this.tripInfo).subscribe((res) => {
      console.log(res);
      this.router.navigate(['booking']);
    });
    // }
  }
  closeCustomerdetailsModal() {
    $('#customerDetailsModal').modal('hide');
    // $('#payForTicketModal').modal('show');
    this.apiService.triggerModal('#payForTicketModal');
  }
}
