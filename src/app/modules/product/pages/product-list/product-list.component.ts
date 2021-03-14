import { Component, OnInit } from '@angular/core';
import { ProductSharedService } from '../../../../shared/services/product-shared.service';
import { Product } from './../../../../shared/models/product.models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public productList: Product[] = [];
  public banner: Product;

  constructor(private productSharedService: ProductSharedService) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.productSharedService.getProductList().subscribe((data) => {
      this.productList = data;
      this.banner = data[0];
    });
  }
}
