import { Component, OnInit } from '@angular/core';
import { UiService } from '../services/ui.service';
import { PreferenceService } from '../services/preference.service';
import { Preference } from '../models/preference';
import { Location } from '../models/location';
import { BomService } from '../services/bom.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  darkModeActive: boolean;
  preferences: Preference[];
  locations: Location[] = [];
  uid: string;

  constructor(
    public ui: UiService,
    private pref: PreferenceService,
    private bom: BomService,
  ) {}

  ngOnInit() {

    this.uid = sessionStorage.getItem('user');

    this.ui.darkModeState.subscribe((value) => {
      this.darkModeActive = value;
    });

    this.pref.getPreferences(this.uid).subscribe((res) => {
      this.preferences = res as Preference[];
      for (const preference of this.preferences) {
        this.bom.getLocation(preference.area_id).subscribe((data) => {
          this.locations.push(data as Location);
        });
      }
    });

  }

}
