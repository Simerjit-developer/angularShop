import { Component, OnInit } from '@angular/core';
import {products} from '../data/products';
import {ActivatedRoute} from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass']
})
export class ProductsListComponent implements OnInit {
  products = products;
  conversionDecryptOutput:string; 
  paramStr: string;
  obj: Object;

 // constructor() { }
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
          this.paramStr = params['id'];
          console.log(this.paramStr); // Print the parameter to the console. 
      });
  }

  ngOnInit(): void {
  }
  share() {
    window.alert('The product has been shared!');
  }
  
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
