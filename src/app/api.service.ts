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
  private stkPushSubject = new BehaviorSubject<any>(null);
  private forgotPasswordSubject = new BehaviorSubject<any>(null);
  private changeForgotPasswordSubject = new BehaviorSubject<any>(null);
  private formDataSubject = new BehaviorSubject<any>(null);

  formData$ = this.formDataSubject.asObservable();
  sourceCity$ = this.sourceCitySubject.asObservable();
  destinationCity$ = this.destinationCitySubject.asObservable();
  tripData$ = this.tripDataSubject.asObservable();
  bookingData$ = this.bookingDataSubject.asObservable();
  stkPush$ = this.stkPushSubject.asObservable();
  forgotPasswordSubject$ = this.forgotPasswordSubject.asObservable();
  changeForgotPasswordSubject$ =
    this.changeForgotPasswordSubject.asObservable();

  private modalTriggerSource = new Subject<string>();
  modalTrigger$ = this.modalTriggerSource.asObservable();

  private displaySubject = new BehaviorSubject<boolean>(false);
  display$ = this.displaySubject.asObservable();

  // Subject to trigger modal close
  private modalCloseSubject = new Subject<void>();
  modalClose$ = this.modalCloseSubject.asObservable();

  constructor(private http: HttpClient) {}

  setFormData(formData: any): void {
    this.formDataSubject.next(formData);
  }
  getFormData(): Observable<any> {
    return this.formData$;
  }
  // Login method
  login(data): Observable<any> {
    return;
  }

  // Signup method
  signup(data): Observable<any> {
    return;
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

  getSourceCity(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http
      .post<any>('/api/globalApi/common/getCity', this.sourceCities, {
        headers,
      })
      .pipe(tap((res) => this.sourceCitySubject.next(res)));
  }

  getDestinationCity(cityId: any): Observable<any> {
    const token = '4F5D3QC5-C94A-CFD5-87C1-4E2903311DF0';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    // this.destCities = {
    //   city_id: '1',
    //   city_type: 'destination',
    //   sourcetype: 'web',
    // };
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
