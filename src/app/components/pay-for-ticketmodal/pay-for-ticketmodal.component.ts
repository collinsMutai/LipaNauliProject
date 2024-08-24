import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Subscription, interval } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
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
}
