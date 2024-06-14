import { Component } from '@angular/core';
import { title } from 'node:process'; 
@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.css'
})
export class PhoneComponent {
  phone=[
    {id:2,title:"iphone",name:"Iphone 14 Pro Max",price:4000,img:"/assets/ipomx.png"},
    {id:1,title:"iphone",name:"Iphone 14 Pro",price:3500,img:"/assets/iph.png"},
    {id:3,title:"Samsung",name:"Samsung s21",price:2500,img:"/assets/ja.png"},
    {id:4,title:"Samsung",name:"Samsung s22 ",price:3300,img:"/assets/sam.png"},
 ]
 
}
