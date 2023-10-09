import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/modals/Customer';

import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];
  constructor(private customerService: CustomerService) {}
  ngOnInit(): void {
    this.getCustomers();
  }

  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'birthDate',
    'phone',
    'address',
  ];

  getCustomers(): void {
    this.customerService.getCustomers().subscribe((result: any) => {
      if (result.users.length) {
        result.users.forEach((item: any) => {
          this.customers.push({
            id: item.id,
            firstName: item.firstName,
            lastName: item.lastName,
            email: item.email,
            birthDate: item.birthDate,
            phone: item.phone,
            address: item.address.address,
          });
          console.log(this.customers);
        });
      }
    });
  }
}
