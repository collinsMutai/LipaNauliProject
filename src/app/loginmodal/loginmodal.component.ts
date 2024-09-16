import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { AuthService } from '../auth.service';
declare var $: any;

@Component({
  selector: 'app-loginmodal',
  templateUrl: './loginmodal.component.html',
  styleUrls: ['./loginmodal.component.css'],
})
export class LoginmodalComponent implements OnInit {
  loginForm: FormGroup;
  login: boolean = false;
  initial: boolean = true;
  signin: boolean = false;
  signup: boolean = false;
  forgot: boolean = false;
  verifyOtp: boolean = false;
  hide: boolean = false;
  displayState: boolean;
  device_number =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const today = new Date().toISOString().split('T')[0];
    this.loginForm = this.fb.group({
      phone: ['', Validators.required],
      country_code: ['254'],
      device_number: this.device_number,
      sourcetype: 'web',
      password: [''],
      otp: [''],
      name: [''],
      email: [''],
      dob: [today],
      gender: [''],
    });
    this.apiService.display$.subscribe((state) => {
      this.displayState = state;
    });
  }

  toggleInitial() {
    this.initial = true;
    this.signin = false;
    this.signup = false;
    this.hide = false;
    this.forgot = false;
    this.verifyOtp = false;
  }

  toggleSignin() {
    this.signin = true;
    this.signup = false;
    this.hide = true;
    this.initial = false;
    this.forgot = false;
    this.verifyOtp = false;
  }

  toggleSignup() {
    this.signup = true;
    this.signin = false;
    this.hide = true;
    this.initial = false;
    this.forgot = false;
    this.verifyOtp = false;
  }

  toggleForgotPassword() {
    this.signup = false;
    this.signin = false;
    this.hide = true;
    this.initial = false;
    this.forgot = true;
    this.verifyOtp = false;
  }

  toggleVerifyOtp() {
    this.signup = false;
    this.signin = false;
    this.hide = true;
    this.initial = false;
    this.forgot = false;
    this.verifyOtp = true;
  }

  passengerDetails() {
    $('#staticBackdrop1').modal('hide');
    $('#staticBackdrop4').modal('show');
  }

  handleAction() {
    if (this.signin) {
      // Handle sign-in logic
      console.log('Sign In', this.loginForm.value);
      this.authService.login(this.loginForm.value).subscribe(
        () => {
          // Handle successful login
          console.log('Logged in successfully');
          $('#loginModal').modal('hide');
        },
        (error) => {
          console.error('Login failed', error);
        }
      );
    }

    if (this.signup) {
      // Handle sign-up logic
      console.log('Register', this.loginForm.value);
      this.toggleVerifyOtp();
    }

    if (
      this.forgot &&
      this.loginForm.value.country_code &&
      this.loginForm.value.phone
    ) {
      console.log(
        'Forgot password',
        this.loginForm.value.country_code,
        this.loginForm.value.phone
      );
      const forgotPasswordData = {
        phone: this.loginForm.value.phone,
        country_code: this.loginForm.value.country_code,
        device_number: this.device_number,
        sourcetype: 'web',
      };
      this.apiService.forgotPassword(forgotPasswordData).subscribe((res) => {
        console.log(res);
        this.toggleVerifyOtp();
      });
    }

    if (this.verifyOtp && this.loginForm.value.otp) {
      console.log('Verify OTP', this.loginForm.value.otp);
      this.authService.verifyOtp(this.loginForm.value.otp).subscribe((res) => {
        if (res.success) {
          this.toggleSignin()
          // OTP verified successfully
          console.log(res.message);

          if (this.forgot) {
            const verifyOtpData = {
              phone: this.loginForm.value.phone,
              newPassword: this.loginForm.value.password,
              confirmPassword: this.loginForm.value.password,
              country_code: this.loginForm.value.country_code,
              sourcetype: 'web',
            };
            this.apiService
              .changeForgotPassword(verifyOtpData)
              .subscribe((res) => {
                console.log(res);
                this.toggleInitial(); // Return to the initial state after password reset
              });
          } else if (this.signup) {
            // If signup was successful, toggle to sign-in mode
            this.toggleSignin();
          }
        } else {
          console.error('OTP verification failed');
        }
      });
    }
  }

  closeLoginModal() {
    $('#loginModal').modal('hide');
  }
}
