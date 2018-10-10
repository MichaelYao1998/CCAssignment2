import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BomService } from '../services/bom.service';
import { ForecastService } from '../services/forecast.service';
import { Forecast } from '../models/forecast';
import { Location } from '../models/location';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  area: Location;
  forecasts: Forecast[];
  weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  icons = [
    'assets/sunny.png',
    'assets/clear.png',
    'assets/partly-cloudy.png',
    'assets/cloudy.png',
    'assets/haze.png',
    'assets/haze.png',
    'assets/haze-night.png',
    'assets/light-rain.png',
    'assets/wind.png',
    'assets/fog.png',
    'assets/showers.png',
    'assets/rain.png',
    'assets/dust.png',
    'assets/frost.png',
    'assets/snow.png',
    'assets/storm.png',
    'assets/light-showers.png',
    'assets/heavy-showers.png',
    'assets/tropicalcyclone.png',
    'assets/sunny.png',
    'assets/sunny.png',
  ];

  constructor(
     private router: Router,
     private activeRoute: ActivatedRoute,
     private bom: BomService,
     private weatherman: ForecastService,
  ) { }
      ngOnInit() {

        const today = new Date().getDay();
        if (today > 0) {
           this.weekdays = this.weekdays.slice(today).concat(this.weekdays.slice(0, today));
        }
        console.log(this.weekdays);
        /*  this.activeRoute.params.subscribe((params) => {
      this.bom.getLocation(params.location).subscribe((data) => {
        this.area = data as Location;
        this.weatherman.getForecast(this.area.name).subscribe((res) => {
          console.log(res);
          this.forecasts = res as Forecast[];
        });
      });
    });*/
  }

  getName() {
    if (this.area) {
      return this.area.name;
    }
    return '';
  }

  firstHalf() {
    return this.weekdays.splice(0, 3);
  }
}
