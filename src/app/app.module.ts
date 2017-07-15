import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainViewComponent } from './main-view/main-view.component';
import { AppRoutesModule } from './app.routing';
import { MoreSpecificComponent } from './more-specific/more-specific.component';
import { LoopsComponent } from './loops/loops.component';
import { ApiService } from "./api.service";


import '@angular/material/prebuilt-themes/purple-green.css';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainViewComponent,
    MoreSpecificComponent,
    LoopsComponent
  ],
  imports: [
    AppRoutesModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
