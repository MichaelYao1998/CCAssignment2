import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private login_url = 'http://localhost:8000/api/login';
  private register_url = 'http://localhost:8000/api/register';

  constructor(private http: HttpClient) { }

  public login(user) {
      return this.http.post(this.login_url, user);
  }

  public register(user) {
    return this.http.post(this.register_url, user);
  }
}
