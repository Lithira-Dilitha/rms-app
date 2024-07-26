import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-all-customer',
  standalone: true,
  imports: [HttpClientModule,CommonModule,FormsModule],
  templateUrl: './view-all-customer.component.html',
  styleUrl: './view-all-customer.component.css'
})
export class ViewAllCustomerComponent {
  public customerList:any;
  constructor(private http:HttpClient){
    this.loadCustomerTable()
  }
  loadCustomerTable(){
    this.http.get("http://localhost:8080/customer-controller/customers").subscribe(
      (data)=>{
        this.customerList=data;
        console.log(data);
        
      }
    )
  }
}
