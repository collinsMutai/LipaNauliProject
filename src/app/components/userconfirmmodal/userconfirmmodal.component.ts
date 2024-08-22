import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
declare var $: any;

@Component({
  selector: 'app-userconfirmmodal',
  templateUrl: './userconfirmmodal.component.html',
  styleUrls: ['./userconfirmmodal.component.css'],
})
export class UserconfirmmodalComponent implements OnInit {
  selectedOption: string = 'yes';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.modalTrigger$.subscribe((modalId: string) => {
      $(modalId).modal('show');
    });
  }

  closePayNowModal() {
    $('#userconfirmmodal').modal('hide');
  }

  confirmUser() {
    this.apiService.setSelectedOption(this.selectedOption); // Update the service with the selected option

    $('#userconfirmmodal').modal('hide');
    this.apiService.triggerModal('#customerDetailsModal');
  }
}
