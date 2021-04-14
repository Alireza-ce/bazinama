import {
  animate,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit, Optional } from '@angular/core';
import { Product } from 'src/app/shared/models/product.models';
import { ProductSharedService } from '../../../../shared/services/product-shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('flyInOut', [
      transition('* => *', [
        query(
          ':enter',
          style({ opacity: 0, transform: 'translateX(-100px)' }),
          { optional: true }
        ),
        query(
          ':enter',
          stagger('1000ms', [
            animate('1s', style({ opacity: 1, transform: 'translateX(0px)' })),
          ]),
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  public productList: Product[] = [];
  constructor(private productSharedService: ProductSharedService) {}
  f;
  ngOnInit(): void {
    this.getProduct();
    throw new RangeError('Parameter must be between 1 and 100');
  }

  getProduct() {
    this.productSharedService.getProductList().subscribe((data) => {
      this.productList = data;
    });
  }

  throwError(){
    let a = [1 , 2, 3]
    this.f =a.find(el =>el ==5)
    this.f[1] = 12;
    a = this.f[12];
  }
}
