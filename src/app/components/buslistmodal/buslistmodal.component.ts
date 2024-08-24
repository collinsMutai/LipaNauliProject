import { Component, OnInit } from '@angular/core';
import { filter, tap } from 'rxjs/operators';
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
  tripInfo!: any;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.modalTrigger$.subscribe((modalId: string) => {
      $(modalId).modal('show');
    });

    this.apiService.tripData$
      .pipe(
        filter((res) => res !== null),
        tap((res) => {
          if (res) {
            if (Array.isArray(res.data)) {
              this.tripInfo = res.data[0];
              console.log('tripInfo', this.tripInfo);
            } else if (typeof res.data === 'object' && res.data !== null) {
              this.tripInfo = res.data;
              console.log('tripInfo', this.tripInfo);
            }
          }
        })
      )
      .subscribe();
  }
  closeBuslistModal() {
    $('#buslistModal').modal('hide');
  }
  bookNow() {
    $('#buslistModal').modal('hide');

    // this.apiService.triggerModal('#customerDetailsModal');
    this.apiService.triggerModal('#userconfirmmodal');
  }
}
