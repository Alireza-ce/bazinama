import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductRouting } from './product-routing.module';
import { ProductCardModule } from './../../shared/modules/product-card.module';
import { ProductBannerComponent } from './components/product-banner/product-banner.component';
import { ProductService } from './services/product.service';
import { ProductTabComponent } from './components/product-tab/product-tab.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ImageComponent } from './components/image/image.component';
import { CommentComponent } from './components/comment/comment.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductBannerComponent,
    ProductTabComponent,
    ImageComponent,
    CommentComponent,
  ],
  imports: [
    CommonModule,
    ProductRouting,
    ProductCardModule,
    MatTabsModule,
    NgCircleProgressModule.forRoot({
      backgroundStrokeWidth: 0,
      radius: 50,
      space: -10,
      outerStrokeWidth: 10,
      outerStrokeColor: '#ffcb05',
      outerStrokeGradientStopColor: '#ffcb05',
      innerStrokeColor: '#e7e8ea',
      innerStrokeWidth: 10,
      animationDuration: 500,
      showUnits: false,
      showSubtitle: false,
    }),
  ],
  providers: [ProductService],
})
export class ProductModule {}
