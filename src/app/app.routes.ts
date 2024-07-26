import { Routes } from '@angular/router';
import { AddCustomerComponent } from './pages/add-customer/add-customer.component';
import { ViewAllCustomerComponent } from './pages/view-all-customer/view-all-customer.component';
import { AddItemComponent } from './pages/add-item/add-item.component';

export const routes: Routes = [
    {
        path:"add-customer",
        component:AddCustomerComponent
    },
    {
        path:"viev-all-customers",
        component:ViewAllCustomerComponent
    },
    {
        path:"add-item",
        component:AddItemComponent
    }
];
