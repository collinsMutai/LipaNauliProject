import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
declare var $: any;

@Component({
  selector: 'app-paynowmodal',
  templateUrl: './paynowmodal.component.html',
  styleUrls: ['./paynowmodal.component.css'],
})
export class PaynowmodalComponent implements OnInit {
  tripInfo: any;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.tripInfo = this.apiService.getTripsSpecificBodyData();
  }

  searchTripRegistration() {
    this.apiService.getAllTrip(this.tripInfo).subscribe((res) => {
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
