import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { FaqComponent } from './pages/faq/faq.component';
import { FundersComponent } from './pages/funders/funders.component';
import {HomeRouting} from './home-routing.module';
import {ProductCardModule} from './../../shared/modules/product-card.module';

@NgModule({
  declarations: [HomeComponent, FaqComponent, FundersComponent],
  imports: [
    CommonModule,
    HomeRouting,
    ProductCardModule
  ]
})
export class HomeModule { }
