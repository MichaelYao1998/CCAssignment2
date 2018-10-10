import { Component, OnInit } from '@angular/core';

import { UiService } from './services/ui.service';
import { AuthService } from './services/auth.service';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showMenu = false;
  darkModeActive: boolean;

  constructor(
    public ui: UiService,
    public auth: AuthService,
    public http: HttpClient
  ) {}

  ngOnInit() {
    this.ui.darkModeState.subscribe((value) => {
      this.darkModeActive = value;
    });
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  modeToggleSwitch() {
    this.ui.darkModeState.next(!this.darkModeActive);
  }

}
