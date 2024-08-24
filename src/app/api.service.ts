import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { environment } from '../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  sourceCities: any = {
    city_id: '',
    city_type: 'source',
    sourcetype: 'web',
  };

  destCities: any = {
    city_id: '1',
    city_type: 'destination',
    sourcetype: 'web',
  };

  private sourceCitySubject = new BehaviorSubject<any>(null);
  private destinationCitySubject = new BehaviorSubject<any>(null);
  private tripDataSubject = new BehaviorSubject<any>(null);
  private bookingDataSubject = new BehaviorSubject<any>(null);
  private bookingBodyDataSubject = new BehaviorSubject<any>(null);
  private getTripsAllBodyDataSubject = new BehaviorSubject<any>(null);
  private getTripsSpecificBodyDataSubject = new BehaviorSubject<any>(null);
  private getCitySourceBodyDataSubject = new BehaviorSubject<any>(null);
  private getCityDestinationBodyDataSubject = new BehaviorSubject<any>(null);
  private stkPushSubject = new BehaviorSubject<any>(null);
  private forgotPasswordSubject = new BehaviorSubject<any>(null);
  private changeForgotPasswordSubject = new BehaviorSubject<any>(null);
  private formDataSubject = new BehaviorSubject<any>(null);

  private selectedOptionSubject = new BehaviorSubject<string>('yes');
  private totalPriceSubject = new BehaviorSubject<number>(0);

  private initStkPushBodyDataSubject = new BehaviorSubject<any>(null);

  formData$ = this.formDataSubject.asObservable();
  sourceCity$ = this.sourceCitySubject.asObservable();
  destinationCity$ = this.destinationCitySubject.asObservable();
  tripData$ = this.tripDataSubject.asObservable();
  bookingData$ = this.bookingDataSubject.asObservable();
  bookingBodyData$ = this.bookingBodyDataSubject.asObservable();
  getTripsAllBodyData$ = this.getTripsAllBodyDataSubject.asObservable();
  getTripsSpecificBodyData$ =
    this.getTripsSpecificBodyDataSubject.asObservable();
  getCitySourceBodyData$ = this.getCitySourceBodyDataSubject.asObservable();
  getCityDestinationBodyData$ =
    this.getCityDestinationBodyDataSubject.asObservable();
  stkPush$ = this.stkPushSubject.asObservable();
  forgotPasswordSubject$ = this.forgotPasswordSubject.asObservable();
  changeForgotPasswordSubject$ =
    this.changeForgotPasswordSubject.asObservable();
  selectedOption$ = this.selectedOptionSubject.asObservable();
  totalPrice$ = this.totalPriceSubject.asObservable();
  initStkPushBodyData$ = this.initStkPushBodyDataSubject.asObservable();

  private modalTriggerSource = new Subject<string>();
  modalTrigger$ = this.modalTriggerSource.asObservable();

  private displaySubject = new BehaviorSubject<boolean>(false);
  display$ = this.displaySubject.asObservable();

  private modalCloseSubject = new Subject<void>();
  modalClose$ = this.modalCloseSubject.asObservable();

  constructor(private http: HttpClient) {
    this.initializeCitySourceBodyData();
    this.initializeCityDestinationBodyData();
    this.initializeTripsSpecificBodyData();
    this.initializeTripsAllBodyData();
    this.initializeStkPushBodyData();
  }

  login(data): Observable<any> {
    return;
  }

  signup(data): Observable<any> {
    return;
  }

  updateTotalPrice(price: number): void {
    this.totalPriceSubject.next(price);
  }

  getTotalPrice(): Observable<number> {
    return this.totalPrice$;
  }

  setFormData(formData: any): void {
    this.formDataSubject.next(formData);
  }

  getFormData(): Observable<any> {
    return this.formData$;
  }

  // Set booking body data
  setBookingBodyData(bookingData: any): void {
    this.bookingBodyDataSubject.next(bookingData);
  }

  // Get booking body data
  getBookingBodyData(): Observable<any> {
    return this.bookingBodyData$;
  }

  // Initialize booking body data
  initializeBookingBodyData(): void {
    const bookingBodyData = {
      booking_date: '2024-08-29',
      route_id: '5',
      token: 'E8887142-7E2A-4327-B324-27B4402FAE2A',
      pickup_id: '4',
      return_id: '1',
      departure_time: '05:00 AM',
      paymentMethod: 'mpesa',
      bus_id: '69',
      currencyId: '1',
      ticket_cnt: '1',
      sub_total: '1.00',
      tax: '0',
      total: '1.00',
      is_luggage: false,
      c_address: '',
      c_city: '',
      c_state: '',
      c_zip: '',
      c_country: '',
      is_flat_offer: false,
      passenger: [
        {
          seat_id: '1',
          seat_name: '',
          seat_type: 'normal',
          ticketPrice: '1.00',
          flatTicketPrice: '1.00',
          currency: 'KES',
          flat_sale: 0,
          name: '',
          last_name: '',
          gender: '',
          age: '',
          mobileId: '254',
          mobile: '715176167',
          nationality: 'Kenyan',
          id_no: '0000',
        },
      ],
      isPromotional: false,
      promotionalTripMsg: '',
      seatSelectionLimit: '0',
      c_email: '',
      delayedFlag: false,
      delayedDate: '',
      bookedThrough: 'web',
      sourcetype: 'web',
    };
    this.setBookingBodyData(bookingBodyData);
  }

  // Set trips all body data
  setTripsAllBodyData(tripsData: any): void {
    this.getTripsAllBodyDataSubject.next(tripsData);
  }

  // Get trips all body data
  getTripsAllBodyData(): Observable<any> {
    return this.getTripsAllBodyData$;
  }

  // Initialize trips all body data
  initializeTripsAllBodyData(): void {
    const tripsAllBodyData = {
      booking_date: '2024-05-29',
      source_id: '1',
      destination_id: '4',
    };
    this.setTripsAllBodyData(tripsAllBodyData);
  }

  // Set trips specific body data
  setTripsSpecificBodyData(tripsData: any): void {
    this.getTripsSpecificBodyDataSubject.next(tripsData);
  }

  // Get trips specific body data
  getTripsSpecificBodyData(): Observable<any> {
    return this.getTripsSpecificBodyDataSubject.getValue();
  }

  // Initialize trips specific body data
  initializeTripsSpecificBodyData(): void {
    const tripsSpecificBodyData = {
      booking_date: '2024-08-19',
      vehicle_reg: 'kdf 002z',
    };
    this.setTripsSpecificBodyData(tripsSpecificBodyData);
  }

  // Set city source body data
  setCitySourceBodyData(citySourceData: any): void {
    this.getCitySourceBodyDataSubject.next(citySourceData);
  }

  // Get city source body data
  getCitySourceBodyData(): any {
    return this.getCitySourceBodyDataSubject.getValue();
  }

  // Initialize city source body data
  initializeCitySourceBodyData(): void {
    const citySourceBodyData = {
      city_id: '',
      city_type: 'source',
      sourcetype: 'web',
    };
    this.setCitySourceBodyData(citySourceBodyData);
  }

  // Set city destination body data
  setCityDestinationBodyData(cityDestinationData: any): void {
    this.getCityDestinationBodyDataSubject.next(cityDestinationData);
  }

  // Get city destination body data
  getCityDestinationBodyData(): any {
    return this.getCityDestinationBodyDataSubject.getValue();
  }

  // Initialize city destination body data
  initializeCityDestinationBodyData(): void {
    const cityDestinationBodyData = {
      city_id: '1',
      city_type: 'destination',
      sourcetype: 'web',
    };
    this.setCityDestinationBodyData(cityDestinationBodyData);
  }

  // Set STK Push body data
  setStkPushBodyData(stkPushData: any): void {
    this.initStkPushBodyDataSubject.next(stkPushData);
  }

  // Get STK Push body data
  getStkPushBodyData(): Observable<any> {
    return this.initStkPushBodyData$;
  }

  // Initialize STK Push body data
  initializeStkPushBodyData(): void {
    const stkPushBodyData = {
      bookingRef: 'SWNGW939T2',
      queryoption: '10',
      queryvalue: '254726097666',
      requestType: 'ticket',
      paymentType: 'mpesa',
    };
    this.setStkPushBodyData(stkPushBodyData);
  }

  // Method to get the current state
  getDisplayState(): boolean {
    return this.displaySubject.getValue();
  }

  // Method to update the state
  setDisplayState(value: boolean): void {
    this.displaySubject.next(value);
  }

  // Method to trigger modal open
  triggerModal(modalId: string) {
    this.modalTriggerSource.next(modalId);
  }

  // Method to trigger modal close
  closeModal(): void {
    this.modalCloseSubject.next();
  }

  // Manage selected option
  setSelectedOption(option: string): void {
    this.selectedOptionSubject.next(option);
  }

  getSelectedOption(): Observable<string> {
    return this.selectedOption$;
  }

  getSourceCity(sourceCities): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http
      .post<any>('/api/globalApi/common/getCity', sourceCities, {
        headers,
      })
      .pipe(tap((res) => this.sourceCitySubject.next(res)));
  }

  getDestinationCity(): Observable<any> {
    const token = '4F5D3QC5-C94A-CFD5-87C1-4E2903311DF0';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    return this.http
      .post<any>('/api/globalApi/common/getCity', this.destCities, {
        headers,
      })
      .pipe(tap((res) => this.destinationCitySubject.next(res)));
  }

  getAllTrip(tripData: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: environment.AUTHORIZATION,
    });

    return this.http
      .post<any>('/api/globalApi/trips/getTrips', tripData, { headers })
      .pipe(tap((res) => this.tripDataSubject.next(res)));
  }

  payNow(bookingData: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: environment.AUTHORIZATION,
    });
    return this.http
      .post<any>(environment.api, bookingData, { headers })
      .pipe(tap((res) => this.bookingDataSubject.next(res)));
  }

  booking(bookingData: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: environment.AUTHORIZATION,
    });
    return this.http
      .post<any>('/api/globalApi/ticket/booking', bookingData, { headers })
      .pipe(tap((res) => this.bookingDataSubject.next(res)));
  }

  stkPushPay(ticketRefInfo: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: environment.AUTHORIZATION,
    });
    return this.http
      .post<any>(environment.stkPushURL, ticketRefInfo, { headers })
      .pipe(tap((res) => this.stkPushSubject.next(res)));
  }

  forgotPassword(forgotPasswordData: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: environment.AUTHORIZATION,
    });
    return this.http
      .post<any>(environment.forgotPasswordURL, forgotPasswordData, { headers })
      .pipe(tap((res) => this.forgotPasswordSubject.next(res)));
  }

  changeForgotPassword(changeForgotPasswordData: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: environment.AUTHORIZATION,
    });
    return this.http
      .post<any>(
        environment.changeForgotPasswordURL,
        changeForgotPasswordData,
        {
          headers,
        }
      )
      .pipe(tap((res) => this.changeForgotPasswordSubject.next(res)));
  }
}
