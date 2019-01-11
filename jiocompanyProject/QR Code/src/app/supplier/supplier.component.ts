import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  value1: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name:'GRN Number Item',value1:'23000099201'},
  {name:'PO No Item',value1:'24000000092/10'},
  {name:'Plant',value1:'3611'},
  {name:'Vendor',value1:'321655(Dresser Rand'},
  {name:'GRN Date',value1:'09.12.2016'},
  {name:'PO Date',value1:'01.12.2016'},
  {name:'Sloc',value1:'1000'},
  
];

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   displayedColumns: string[] = ['name', 'value1'];
  dataSource = ELEMENT_DATA;  
}
