import { SafePipe } from './safe-pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpModule } from '@angular/http';
import { QuestsComponent } from './quests/quests.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatButtonModule} from '@angular/material/button';
import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import { GearComponent } from './gear/gear.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    QuestsComponent,
    SafePipe,
    GearComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'gear', component: GearComponent },
      { path: 'streams', component: QuestsComponent },
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent }
      
    
    ]),
    MatButtonModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
