
import { Component,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { increment } from '../state/counter/counter.actions';
import Swal from 'sweetalert2';
import Toast from 'sweetalert2';
@Component({
  selector: 'app-phonedetails',
  templateUrl: './phonedetails.component.html',
  styleUrl: './phonedetails.component.css'
})
export class PhonedetailsComponent {
  private store=inject(Store);
  increment()
  {
    this.store.dispatch(increment());
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "تمت الإضافة الى السلة بنجاح"
    });
  }
  id:any;
  items:any

  phone=[
    {id:1,title:"iphone",name:"Iphone 14 Pro",price:3500,img:"/assets/iph.png"},
    {id:2,title:"iphone",name:"Iphone 14 Pro Max",price:4000,img:"/assets/ipomx.png"},
    {id:3,title:"Samsung",name:"Samsung s21",price:2500,img:"/assets/ja.png"},
    {id:4,title:"Samsung",name:"Samsung s22 ",price:3300,img:"/assets/sam.png"},
 ]
  constructor(private route:ActivatedRoute){}
 
  ngOnInit()
  {
    this.id=this.route.snapshot.paramMap.get('items');
    this.items=this.phone.filter(e=>e.id==this.id);
    console.log(this.items)
    
  }
}


