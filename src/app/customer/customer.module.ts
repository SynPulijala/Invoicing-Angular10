import { CommonDataService } from './../common-data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';


@NgModule({
  declarations: [CreateCustomerComponent, CustomerListComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  providers:[CommonDataService]
})
export class CustomerModule { }
