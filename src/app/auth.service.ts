import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://your-api-url.com'; // Replace with your API URL
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(
    this.hasToken()
  );
  public isAuthenticated$: Observable<boolean> =
    this.isAuthenticatedSubject.asObservable();

  private userSubject = new BehaviorSubject<string | null>(this.getUsername());
  public user$: Observable<string | null> = this.userSubject.asObservable();

  constructor() {}

  login(credentials: { phone: string; password: string }): Observable<any> {
    // Simulating a fake successful login
    const fakeResponse = {
      token: 'fake-auth-token',
      username: 'fakeuser',
    };
    return of(fakeResponse).pipe(
      tap((response) => {
        this.storeAuthData(response.token, response.username);
        this.isAuthenticatedSubject.next(true);
        this.userSubject.next(response.username);
      })
    );
  }

  signup(userData: {
    phone: string;
    password: string;
    name: string;
    email: string;
    dob: string;
    gender: string;
  }): Observable<any> {
    // Simulating a fake successful signup
    const fakeResponse = {
      token: 'fake-auth-token',
      username: 'fakeuser',
    };
    return of(fakeResponse).pipe(
      tap((response) => {
        this.storeAuthData(response.token, response.username);
        this.isAuthenticatedSubject.next(true);
        this.userSubject.next(response.username);
      })
    );
  }

  logout(): void {
    this.removeAuthData();
    this.isAuthenticatedSubject.next(false);
    this.userSubject.next(null);
  }

  verifyOtp(otp: string): Observable<any> {
    // Simulating a fake OTP verification
    const fakeResponse = {
      success: true,
      message: 'OTP verified successfully',
    };
    return of(fakeResponse).pipe(
      tap((response) => {
        if (response.success) {
          console.log(response.message);
        } else {
          console.error('OTP verification failed');
        }
      })
    );
  }

  private storeAuthData(token: string, username: string): void {
    localStorage.setItem('authToken', token);
    localStorage.setItem('username', username);
  }

  private removeAuthData(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('authToken');
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }
}
