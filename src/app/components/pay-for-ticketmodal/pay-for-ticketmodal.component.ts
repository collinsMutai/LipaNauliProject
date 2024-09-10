import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { filter, tap } from 'rxjs/operators';
import Swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-pay-for-ticketmodal',
  templateUrl: './pay-for-ticketmodal.component.html',
  styleUrls: ['./pay-for-ticketmodal.component.css'],
})
export class PayForTicketmodalComponent implements OnInit {
  totalPrice: number = 0;
  stkpush: boolean = false;
  paymentStatus: any; // Replace with appropriate type
  loading: boolean = false;
  error: string | null = null;

  tripReviewInfo: any;
  bookingInfo!: any;
  tripInfo!: any;
  checkPaymentInfo!: any;
  paymentForm: FormGroup;
  seconds: number = 20; // Timer countdown seconds
  id: any; // Timer ID

  constructor(private apiService: ApiService, private fb: FormBuilder) {
    this.paymentForm = this.fb.group({
      code: ['254', Validators.required],
      phone: ['726097666', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.apiService.stkPush$.subscribe(
      (data) => {
        console.log('stkPushSubject data:', data);
      },
      (error) => {
        console.error('Error in stkPushSubject subscription:', error);
      }
    );

    this.apiService.modalTrigger$.subscribe((modalId: string) => {
      $(modalId).modal('show');
    });

    this.apiService.tripData$
      .pipe(
        filter((res) => res !== null),
        tap((res) => {
          if (res.data) {
            this.tripInfo = res.data[0];
            console.log('tripInfo', this.tripInfo);
          } else {
            console.warn('No data found');
          }
        })
      )
      .subscribe();

    this.apiService.totalPrice$.subscribe((price) => {
      this.totalPrice = price;
    });

    this.apiService.bookingData$
      .pipe(
        filter((res) => res !== null),
        tap((res) => {
          if (res) {
            this.bookingInfo = res;
            console.log('bookingInfo', this.bookingInfo);
          } else {
            console.warn('No data found');
          }
        })
      )
      .subscribe();

    this.tripReviewInfo = this.apiService.getStkPushBodyData();
    console.log('this.tripReviewInfo', this.tripReviewInfo);

    this.checkPaymentInfo = this.apiService.getCheckMpesaPaymentBodyData();
    console.log('this.checkPaymentInfo', this.checkPaymentInfo);
    this.updateQueryValue();

    // Subscribe to form value changes
    this.paymentForm.valueChanges.subscribe(() => {
      this.updateQueryValue();
    });
  }

  updateQueryValue() {
    if (this.tripReviewInfo && this.paymentForm.valid) {
      const formValues = this.paymentForm.value;
      this.tripReviewInfo.queryvalue = `${this.paymentForm.value.code}${this.paymentForm.value.phone}`;
      this.tripReviewInfo.bookingRef = `${this.paymentForm.value.code}${this.paymentForm.value.phone}`;
      console.log('Updated tripReviewInfo', this.tripReviewInfo);
    }
  }

  checkMpesaPayment(ref: any) {
    console.log('checkMpesaPayment called.');
    let data = {
      bookingRef: ref,
      queryoption: this.totalPrice,
      queryvalue: `${this.paymentForm.value.code}${this.paymentForm.value.phone}`,
      originalBookingRef: ref,
      uuid: ref,
      requestType: 'ticket',
    };
    // this.tripReviewInfo.bookingRef = this.bookingInfo.booking_reference;
    // this.tripReviewInfo.queryvalue = `${this.paymentForm.value.code}${this.paymentForm.value.phone}`;
    this.apiService.checkMpesaPayment(data).subscribe(
      (res) => {
        Swal.fire(res.msg);
        console.log('Payment checked', res);
      },
      (error) => {
        Swal.fire(error.msg);
        console.error('Error checking payment', error);
      }
    );
  }

  onSubmit() {
    console.log('Form submitted', this.paymentForm.value);

    if (this.paymentForm.invalid) {
      console.warn('Form is invalid');
      // Handle form validation errors
      return;
    }

    const formValues = this.paymentForm.value;
    this.tripReviewInfo.queryvalue = `${formValues.code}${formValues.phone}`;
    this.tripReviewInfo.bookingRef = this.bookingInfo.booking_reference;
    console.log('this.tripReviewInfo', this.tripReviewInfo);
    let data = {
      bookingRef: this.bookingInfo.booking_reference,
      queryoption: this.totalPrice,
      queryvalue: '254724026032',
      requestType: 'ticket',
      paymentType: 'mpesa',
    };
    // let data = {
    //   bookingRef: 'SWNGW93889T2',
    //   queryoption: this.totalPrice,
    //   queryvalue: '254726097666',
    //   requestType: 'ticket',
    //   paymentType: 'mpesa',
    // };
    console.log('data', data);

    this.apiService.stkPushPay(data).subscribe(
      (response) => {
        this.paymentStatus = response;
        console.log('Payment response', this.paymentStatus);
      },
      (error) => {
        this.error = error.message;
      }
    );

    const intervalTime = 20000;
    const totalDuration = 40000;

    const intervalId = setInterval(() => {
      this.checkMpesaPayment(this.bookingInfo.booking_reference);
    }, intervalTime);

    setTimeout(() => {
      clearInterval(intervalId);
      this.closePayNowModal()
      window.location.reload();
    }, totalDuration);
  }

  closePayNowModal() {
    $('#payForTicketModal').modal('hide');
  }
}
