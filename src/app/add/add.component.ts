import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BomService } from '../services/bom.service';
import { UiService } from '../services/ui.service';
import { PreferenceService } from '../services/preference.service';
import { Location } from '../models/location';
import { Preference } from '../models/preference';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  darkModeActive: boolean;
  locations: Location[];
  preferences: Preference[];
  input = 'vic';
  addLocationForm: FormGroup;
  uid: string;

  constructor(
    private formBuilder: FormBuilder,
    private bom: BomService,
    private pref: PreferenceService,
    private ui: UiService) { }

    ngOnInit() {
      this.addLocationForm = this.formBuilder.group({
        locationName: []
      });

      this.uid = sessionStorage.getItem('user');

      this.bom.getLocations()
        .subscribe((data) => {
          this.locations = data as Location[];
          this.locations.sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          });
      });

      this.pref.getPreferences(this.uid).subscribe((res) => {
        this.preferences = res as Preference[];
      });

      this.ui.darkModeState.subscribe((value) => {
        this.darkModeActive = value;
      });
  }

  get f() { return this.addLocationForm.controls; }

  add(lid: string) {
    const req: Preference = { user_id: this.uid, area_id: lid };
    this.pref.addPreference(req).subscribe((data) => {
      this.preferences.push(data as Preference);
    });
  }

  remove(lid: string) {
    this.pref.delPreference(lid).subscribe((data) => {
      this.preferences.splice(this.hasPref(lid), 1);
    });
  }

  hasPref(area_id) {
    if (!this.preferences) {
      return;
    }
    return this.preferences.findIndex((pref) => {
      return pref.area_id === area_id;
    });
}

}
