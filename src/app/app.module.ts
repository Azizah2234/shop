import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PhoneComponent } from './phone/phone.component';
import { PhonedetailsComponent } from './phonedetails/phonedetails.component';
import { LapComponent } from './lap/lap.component';
import { RouteComponent } from './route/route.component';
import { WhatchComponent } from './whatch/whatch.component';
import { EarphonComponent } from './earphon/earphon.component';
import { CamraComponent } from './camra/camra.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';


@NgModule({
  declarations: [  AppComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    PhoneComponent,
    PhonedetailsComponent,
    LapComponent,
    RouteComponent,
    WhatchComponent,
    EarphonComponent,
    CamraComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    })
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
