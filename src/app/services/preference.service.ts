import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PreferenceService {

  private get_url = 'http://localhost:8000/api/preferences/user';
  private set_url = 'http://localhost:8000/api/preferences';

  constructor(private http: HttpClient) { }

  public getPreferences(user_id) {
    return this.http.get(`${this.get_url}/${user_id}`);
  }

  public addPreference(pref) {
    return this.http.post(this.set_url, pref);
  }

  public delPreference(id) {
    return this.http.delete(`${this.set_url}/${id}`);
  }
}
