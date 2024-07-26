import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-view-all-customer',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule, NavBarComponent],
  templateUrl: './view-all-customer.component.html',
  styleUrl: './view-all-customer.component.css'
})
export class ViewAllCustomerComponent {

  public customerobj ={
    id:"",
    name:"",
    city:"",
    contact:""
}
  public customerList:any;
  constructor(private http:HttpClient){
    this.loadCustomerTable()
  }


  deleteCustomer(customer:any){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`http://localhost:8080/customer-controller/customer/${customer.id}`).subscribe(
          res=>{
            this.loadCustomerTable();
            swalWithBootstrapButtons.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        )

      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });
  }

  updateCustomer(customer:any){
    if(customer!==null){
      this.customerobj=customer
    }
   }
   saveUpdateCustomer(){
      // this.http.put("http://localhost:8080/customer-controller/customer",{this.customerobj}).subscribe(

      // )
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
