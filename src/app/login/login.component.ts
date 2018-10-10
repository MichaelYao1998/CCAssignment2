import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

   onSubmit() {

    if (this.loginForm.invalid === true) {
      return;
    }

    this.auth.login(this.loginForm.value).subscribe((data) => {
      const user = data as User;
      if (user) {
        sessionStorage.setItem('user', user.id);
        this.router.navigateByUrl('/home');
      }
    }, (err) => {
      console.error(err);
    });
  }

}
