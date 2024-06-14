import { Component } from '@angular/core';

@Component({
  selector: 'app-camra',
  templateUrl: './camra.component.html',
  styleUrl: './camra.component.css'
})
export class CamraComponent {
  camra=[
    
    {id:2,title:"Canon",name:"RF 600mm F11 IS STM Lens",price:3700,img:"/assets/ccc.png"},
    {id:2,title:"Canon",name:"EOS 4000D Zoom Kit With EF-S 18-55mm f/3.5-5.6 III Lens",price:1900,img:"/assets/cc.png"},
    {id:1,title:"Telo",name:"4MP 2K Camera Dual Band WIFI With External Antenna",price:230,img:"/assets/c.png"}
   
 ]
 

}
