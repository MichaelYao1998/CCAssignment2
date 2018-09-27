import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { UiService } from './services/ui.service';
import { FtpClientModule } from './ftp-client/ftp-client.module';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FtpClientModule,
  ],
  providers: [
    UiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
