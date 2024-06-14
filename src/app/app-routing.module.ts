import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PhoneComponent } from './phone/phone.component';
import { PhonedetailsComponent } from './phonedetails/phonedetails.component';
import { LapComponent } from './lap/lap.component';
import { RouteComponent } from './route/route.component';
import { WhatchComponent } from './whatch/whatch.component';
import { EarphonComponent } from './earphon/earphon.component';
import { CamraComponent } from './camra/camra.component'

const routes: Routes = [
{ path:"",component:HomeComponent},
{ path:"home",component:HomeComponent},
{ path:"about",component:AboutComponent},
{ path:"phone",component:PhoneComponent},
{ path:"lap",component:LapComponent},
{ path:"route",component:RouteComponent},
{ path:"whatch",component:WhatchComponent},
{ path:"earphon",component:EarphonComponent},
{ path:"camra",component:CamraComponent},
{ path:"phonedetails/:items",component:PhonedetailsComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
