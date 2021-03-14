import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './../components/product-card/product-card.component';
import { ConvertToPercent } from './../pipes/convert-to-percent.pipe';

@NgModule({
  declarations: [ProductCardComponent, ConvertToPercent],
  imports: [CommonModule],
  exports: [ProductCardComponent, ConvertToPercent],
})
export class ProductCardModule {}
