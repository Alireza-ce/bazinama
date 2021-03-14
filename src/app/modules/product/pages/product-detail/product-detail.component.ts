import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ProductDetail } from './../../../../shared/models/product-detail.models';
import { environment } from 'src/environments/environment';
import { Comment } from './../../../../shared/models/comment.models';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  public productId: number;
  public product: ProductDetail;
  public imageSrc: string;
  public comments: Comment[];
  constructor(
    private productService: ProductService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.setId();
    this.getProductDetail();
    this.getProductComment();
  }

  setId() {
    this.productId = this.activateRoute.snapshot.params.id;
  }

  getProductDetail() {
    this.productService.getProductList(this.productId).subscribe((data) => {
      this.product = data;
      this.imageSrc = `${environment.baseUrl}/${this.product.feature_avatar.hdpi}`;
    });
  }

  getProductComment() {
    this.productService.getCommentList(this.productId).subscribe((data) => {
      this.comments = data;
    });
  }
}
