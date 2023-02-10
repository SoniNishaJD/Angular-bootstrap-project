import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent {

    salesPersonList :SalesPerson[]=[
      new SalesPerson("Nisha","Soni","nisha@gmail.com",5000),
      new SalesPerson("Amit","Soni","amit@gmail.com",6000),
      new SalesPerson("Khushi","Soni","khushi@gmail.com",7000)
    ]  
}
