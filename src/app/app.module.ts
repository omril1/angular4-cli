import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { MaterialModule } from '@angular/material';
import '@angular/material/prebuilt-themes/purple-green.css';
import { MainViewComponent } from './main-view/main-view.component';
import { AppRoutesModule } from './app.routing';
import { MoreSpecificComponent } from './more-specific/more-specific.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainViewComponent,
    MoreSpecificComponent
  ],
  imports: [
    AppRoutesModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
