import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Subscription } from 'rxjs';
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

  tripReviewInfo: any;
  bookingInfo!: any;
  tripInfo!: any;
  paymentForm: FormGroup;

  constructor(private apiService: ApiService, private fb: FormBuilder) {
    this.paymentForm = this.fb.group({
      code: ['254', Validators.required],
      phone: ['726097666', [Validators.required]],
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

    this.tripReviewInfo = this.apiService.getStkPushBodyData();
    console.log('this.tripReviewInfo', this.tripReviewInfo);
    this.updateQueryValue();

    // Subscribe to form value changes
    this.paymentForm.valueChanges.subscribe(() => {
      this.updateQueryValue();
    });
  }

  updateQueryValue() {
    if (this.tripReviewInfo && this.paymentForm.valid) {
      const formValues = this.paymentForm.value;
      this.tripReviewInfo.queryvalue = formValues.phone;
      console.log('Updated tripReviewInfo', this.tripReviewInfo);
    }
  }

  onSubmit() {
    console.log(this.paymentForm.value);

    if (this.paymentForm.invalid) {
      // Handle form validation errors
      return;
    }

 

    const formValues = this.paymentForm.value;
    this.tripReviewInfo.queryvalue = `${formValues.code}${formValues.phone}`;
    console.log('this.tripReviewInfo', this.tripReviewInfo);

    this.apiService.stkPushPay(this.tripReviewInfo).subscribe(
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
