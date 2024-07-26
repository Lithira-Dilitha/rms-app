import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddCustomerComponent } from "./pages/add-customer/add-customer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddCustomerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rms-app';
}
