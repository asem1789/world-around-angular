import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  email: string = '';
  password: string = '';
  constructor() {}

  ngOnInit(): void {}

  onChange(from: any) {
    const { target } = from;
    if (target.name === 'email') {
      this.email = target.value;
    } else if (target.name === 'password') {
      this.password = target.value;
    }
  }
}
