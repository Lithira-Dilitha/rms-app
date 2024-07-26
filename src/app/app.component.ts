import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddCustomerComponent } from "./pages/add-customer/add-customer.component";
import { ViewAllCustomerComponent } from "./pages/view-all-customer/view-all-customer.component";
import { NavBarComponent } from "./pages/nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddCustomerComponent, ViewAllCustomerComponent, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rms-app';
}
