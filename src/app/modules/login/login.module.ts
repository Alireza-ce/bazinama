import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginService} from './services/login.service';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  providers: [LoginService],
})
export class LoginModule {}
