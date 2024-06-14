import { Component } from '@angular/core';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrl: './route.component.css'
})
export class RouteComponent {
  route=[
    {id:1,title:"TP-LINK",name:"TL-MR6400 Wireless N 4G LTE Router 300 Mbps Black",price:250,img:"/assets/rou.png"},
    {id:2,title:"TP-LINK",name:"Archer MR400 AC1200 Wireless Dual Band 4G LTE Router, 4G LTE Router",price:300,img:"/assets/rr.png"},
    {id:3,title:"STC",name:"Router B535 White",price:400,img:"/assets/rrr.png"},
   
 ]
 

}
