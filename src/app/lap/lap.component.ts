import { Component } from '@angular/core';

@Component({
  selector: 'app-lap',
  templateUrl: './lap.component.html',
  styleUrl: './lap.component.css'
})
export class LapComponent {
  lap=[
    {id:1,title:" ASUS",name:"Vivobook 16 Laptop With 16-inch Display, AMD Ryzen 5 Processor/8GB ",price:6500,img:"/assets/laa.png"},
    {id:2,title:"HUAWEI",name:"Pavilion Plus Laptop With 14.2-inch Display, Core i7 Processor/16GB",price:5000,img:"/assets/laaa.png"},
    {id:3,title:"HP",name:" Matebook X Pro 2023 Laptop With 14-Inch Display, Core i7-1360P Processor/16GB",price:2900,img:"/assets/ll.png"}
    
 ]
 

}
