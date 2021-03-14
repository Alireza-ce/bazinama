import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ProductDetail } from 'src/app/shared/models/product-detail.models';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'product-tab',
  templateUrl: './product-tab.component.html',
  styleUrls: ['./product-tab.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductTabComponent implements OnInit {
  @Input() product: ProductDetail;
  constructor() {}

  ngOnInit(): void {
    this.setImageSrc();
  }
  
  setImageSrc() {
    this.product.product_staff.forEach((element) => {
      element.app_user.avatar = `${environment.baseUrl}/${element.app_user.avatar}`;
    });
  }
}
