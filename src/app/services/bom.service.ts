import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BomService {

  private url = 'http://localhost:8000/api/areas';

  constructor(private http: HttpClient) { }

  public getLocations() {
      return this.http.get(this.url);
  }

  public getLocation(id) {
      return this.http.get(`${this.url}/${id}`);
  }

}
