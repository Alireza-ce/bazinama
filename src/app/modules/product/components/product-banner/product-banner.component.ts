import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product.models';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'product-banner',
  templateUrl: './product-banner.component.html',
  styleUrls: ['./product-banner.component.scss'],
})
export class ProductBannerComponent implements OnInit {
  @Input() product: Product;
  public imageSrc: string;
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
