import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
declare var $: any;

@Component({
  selector: 'app-paynowmodal',
  templateUrl: './paynowmodal.component.html',
  styleUrls: ['./paynowmodal.component.css'],
})
export class PaynowmodalComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}
  registrationHandler() {
    const tripInfo: any = {
      booking_date: '2024-05-04',
      vehicle_reg: 'kdf 002z',
    };
    this.apiService.getAllTrip(tripInfo).subscribe((res) => {
      console.log(res);
      $('#payNowModal').modal('hide');
      this.apiService.triggerModal('#buslistModal');
      this.apiService.setDisplayState(true);
    });
  }
  closePayNowModal() {
    $('#payNowModal').modal('hide');
  }
}
