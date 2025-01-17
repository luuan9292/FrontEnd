import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() prod: Product;

  constructor() { }

  ngOnInit() {
  }

}
