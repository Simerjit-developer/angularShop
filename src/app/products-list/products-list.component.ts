import { Component, OnInit } from '@angular/core';
import {products} from '../data/products';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass']
})
export class ProductsListComponent implements OnInit {
  products = products;

  constructor() { }

  ngOnInit(): void {
  }
  share() {
    window.alert('The product has been shared!');
  }

}
