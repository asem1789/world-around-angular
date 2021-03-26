import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css'],
})
export class SignupPageComponent implements OnInit {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor() {}

  ngOnInit(): void {}

  onChange(from: any) {
    const { target } = from;
    if (target.name === 'email') {
      this.email = target.value;
    } else if (target.name === 'password') {
      this.password = target.value;
    } else if (target.name === 'confirmPassword') {
      this.confirmPassword = target.value;
    }
  }
}
