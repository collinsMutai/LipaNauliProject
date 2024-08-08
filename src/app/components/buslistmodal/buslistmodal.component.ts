import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
declare var $: any;

@Component({
  selector: 'app-buslistmodal',
  templateUrl: './buslistmodal.component.html',
  styleUrls: ['./buslistmodal.component.css'],
})
export class BuslistmodalComponent implements OnInit {
  seat_id!: number;
  formattedDepartureDate!: string;
  destinationCityId!: string;
  sourceCityId!: string;

  login!: boolean;
  bookingInfo!: any;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
     this.apiService.modalTrigger$.subscribe((modalId: string) => {
       $(modalId).modal('show');
     });
    this.apiService.tripData$.subscribe((res) => {
      if (res) {
        console.log(res);
        if (Array.isArray(res.data)) {
          this.bookingInfo = res.data[0];
        } else if (typeof res.data === 'object' && res.data !== null) {
          this.bookingInfo = res.data;
        }
        console.log('Updated booking data:', this.bookingInfo);
      }
    });
  }
  closeBuslistModal() {
    $('#buslistModal').modal('hide');
  }
  bookNow() {
    $('#buslistModal').modal('hide');
   
    this.apiService.triggerModal('#customerDetailsModal');
  }
}
