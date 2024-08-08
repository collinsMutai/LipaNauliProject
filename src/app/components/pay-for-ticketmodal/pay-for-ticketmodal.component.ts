import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Subscription, interval } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-pay-for-ticketmodal',
  templateUrl: './pay-for-ticketmodal.component.html',
  styleUrls: ['./pay-for-ticketmodal.component.css'],
})
export class PayForTicketmodalComponent implements OnInit, OnDestroy {
  stkpush: boolean = false;
  paymentStatus: any; // Replace with appropriate type
  loading: boolean = false;
  error: string | null = null;
  bookingData: any = {
    booking_date: '2024-08-1',
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
        mobile: '715176167',
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
  ticketRefInfo: any = {
    bookingRef: 'SWNGW939T2',
    queryoption: '10',
    queryvalue: '254726097666',
    requestType: 'ticket',
    paymentType: 'mpesa',
  };
  bookingInfo!: any;
  tripInfo!: any;
  paymentForm: FormGroup;
  countdown$: Subscription | null = null;
  minutes: number = 10;
  seconds: number = 0;

  constructor(private apiService: ApiService, private fb: FormBuilder) {
    this.paymentForm = this.fb.group({
      code: ['254', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    });
  }

  ngOnInit(): void {
    this.apiService.modalTrigger$.subscribe((modalId: string) => {
      $(modalId).modal('show');
    });

    this.apiService.tripData$.subscribe((res) => {
      this.bookingInfo = res.data;
      console.log(this.bookingInfo);
    });
  }

  stkBtn() {
    this.loading = true;
    this.error = null;
    this.apiService.stkPushPay(this.ticketRefInfo).subscribe(
      (response) => {
        this.paymentStatus = response;
        console.log(this.paymentStatus);

        this.loading = false;
      },
      (error) => {
        this.error = error.message;
        this.loading = false;
      }
    );
  }

  onSubmit() {
    if (this.paymentForm.invalid) {
      // Handle form validation errors
      return;
    }

    this.loading = true;
    this.error = null;

    const formValues = this.paymentForm.value;
    this.ticketRefInfo.queryvalue = formValues.phone;

    this.apiService.stkPushPay(this.ticketRefInfo).subscribe(
      (response) => {
        this.paymentStatus = response;
        console.log(this.paymentStatus);
        this.loading = false;
      },
      (error) => {
        this.error = error.message;
        this.loading = false;
      }
    );
  }

  closePayNowModal() {
    $('#payForTicketModal').modal('hide');
  }
  ngOnDestroy() {
    if (this.countdown$) {
      this.countdown$.unsubscribe();
    }
  }
}
