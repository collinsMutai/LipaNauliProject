import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
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
  constructor(private apiService: ApiService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      phone: ['', Validators.required],
      country_code: ['254'],
      device_number: '9g6mwyj43tsp095xu76bwc',
      sourcetype: 'web',
      password: [''],
      otp: [''],
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
      this.apiService.signup(this.loginForm.value);
    }
    if (this.signup) {
      // Handle sign-up logic
      console.log('Send Verification', this.loginForm.value);
      this.apiService.login(this.loginForm.value);
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
        device_number: '9g6mwyj43tsp095xu76bwc',
        sourcetype: 'web',
      };
      this.apiService.forgotPassword(forgotPasswordData).subscribe((res) => {
        console.log(res);
      });
      this.toggleVerifyOtp();
    }
    if (this.verifyOtp && this.loginForm.value.otp) {
      console.log('Verify otp', this.loginForm.value.otp);
      this.toggleVerifyOtp();
      const verifyOtpData = {
        phone: '123456789',
        newPassword: 'xxxxxxx',
        confirmPassword: ' xxxxxxx',
        country_code: '254',
        sourcetype: 'web',
      };
      this.apiService.changeForgotPassword(verifyOtpData).subscribe((res) => {
        console.log(res);
      });
    }
  }
  closeLoginModal() {
    $('#loginModal').modal('hide');
  }
}
