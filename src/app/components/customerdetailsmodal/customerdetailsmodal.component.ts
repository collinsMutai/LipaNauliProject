import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
declare var $: any;

@Component({
  selector: 'app-customerdetailsmodal',
  templateUrl: './customerdetailsmodal.component.html',
  styleUrls: ['./customerdetailsmodal.component.css'],
})
export class CustomerdetailsmodalComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.modalTrigger$.subscribe((modalId: string) => {
      $(modalId).modal('show');
    });
  }
}
