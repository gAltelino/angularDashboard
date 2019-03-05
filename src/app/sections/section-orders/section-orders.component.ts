import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/order';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  orders: Order[] = [
    {
      id: 1,
      customer: { id: 1, name: 'jeff1', email: 'hi@hi1', state: 'Sp' },
      total: 2150, placed: new Date(2019, 12, 1), fulfied: new Date(2019, 12, 30)
    },
    {
      id: 2,
      customer: { id: 2, name: 'jeff2', email: 'hi@hi2', state: 'Sp' },
      total: 2140, placed: new Date(2019, 12, 1), fulfied: new Date(2019, 12, 30)
    },
    {
      id: 3,
      customer: { id: 3, name: 'jeff3', email: 'hi@h3', state: 'Sp' },
      total: 2130, placed: new Date(2019, 12, 1), fulfied: new Date(2019, 12, 30)
    },
    {
      id: 4,
      customer: { id: 4, name: 'jeff4', email: 'hi@h4', state: 'Rj' },
      total: 2120, placed: new Date(2019, 12, 1), fulfied: new Date(2019, 12, 30)
    },
    {
      id: 5,
      customer: { id: 5, name: 'jeff5', email: 'hi@h5', state: 'Rj' },
      total: 2110, placed: new Date(2019, 12, 1), fulfied: new Date(2019, 12, 30)
    }

  ];

  ngOnInit() {
  }

}
