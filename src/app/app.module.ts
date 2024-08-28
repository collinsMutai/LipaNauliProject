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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaynowmodalComponent } from './components/paynowmodal/paynowmodal.component';
import { BuslistmodalComponent } from './components/buslistmodal/buslistmodal.component';
import { CustomerdetailsmodalComponent } from './components/customerdetailsmodal/customerdetailsmodal.component';
import { PayForTicketmodalComponent } from './components/pay-for-ticketmodal/pay-for-ticketmodal.component';
import { LoginmodalComponent } from './loginmodal/loginmodal.component';
import { UserconfirmmodalComponent } from './components/userconfirmmodal/userconfirmmodal.component';
import { KesCurrencyPipe } from './kes-currency.pipe';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthInterceptor } from './auth.interceptor';

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
    UserconfirmmodalComponent,
    KesCurrencyPipe,
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
    NgbModule,
    NgbCarouselModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
