import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {
  constructor(private http:HttpClient){}
addCustomer() {
  this.http.post("http://localhost:8080/item-controller/item",this.itemObj).subscribe(
    res=>{
      Swal.fire({
        title: "Item Add",
        text: "You clicked the button!",
        icon: "success"
      });
    }
  )
}
  public itemObj ={
    name:"",
    rentalPerDay:"",
    getFinePerDay:""
  }
}
