import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  private url = 'http://localhost:8000/api/forecasts';

  constructor(private http: HttpClient) { }

  public getForecast(area) {
    return this.http.get(`${this.url}/${area}`);
  }
}
