import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.models';
import { ProductSharedService } from '../../../../shared/services/product-shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public productList: Product[] = [];
  constructor(private productSharedService: ProductSharedService) {}

  ngOnInit(): void {
    this.getProduct();
  }
  
  getProduct() {
    this.productSharedService.getProductList().subscribe((data) => {
      this.productList = data;
    });
  }
}
