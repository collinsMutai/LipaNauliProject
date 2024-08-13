import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FooterComponent } from './components/footer/footer.component';
import { CtaComponent } from './components/cta/cta.component';
import { LipanauliappComponent } from './components/lipanauliapp/lipanauliapp.component';

import { LipanaulisliderComponent } from './components/lipanaulislider/lipanaulislider.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaynowmodalComponent } from './components/paynowmodal/paynowmodal.component';
import { BuslistmodalComponent } from './components/buslistmodal/buslistmodal.component';
import { CustomerdetailsmodalComponent } from './components/customerdetailsmodal/customerdetailsmodal.component';
import { PayForTicketmodalComponent } from './components/pay-for-ticketmodal/pay-for-ticketmodal.component';
import { LoginmodalComponent } from './loginmodal/loginmodal.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    CtaComponent,
    LipanauliappComponent,
    LipanaulisliderComponent,
    PaynowmodalComponent,
    BuslistmodalComponent,
    CustomerdetailsmodalComponent,
    PayForTicketmodalComponent,
    LoginmodalComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
