import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product.models';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  public imageSrc: string;
  public progressWidth:string;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setImageSrc();
  }

  setImageSrc() {
    this.imageSrc = `${environment.baseUrl}/${this.product.feature_avatar.hdpi}`;
  }

  productDetail(id: number) {
    this.router.navigate(['/project/project-detail', id]);
  }
}
