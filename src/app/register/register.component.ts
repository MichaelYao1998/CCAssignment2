import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      passwordConf: ['', Validators.required]
    });
  }

  get f() { return this.registerForm.controls; }

   onSubmit() {

     if (this.registerForm.invalid === true || this.f.password.value !== this.f.passwordConf.value) {
      return;
    }

    this.auth.register(this.registerForm.value as User).subscribe((data) => {
      const user = data as User;
      console.log(user);
      if (user) {
        sessionStorage.setItem('user', user.id);
        this.router.navigateByUrl('/home');
      }
    }, (err) => {
      console.error(err);
    });
  }


}
