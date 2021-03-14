import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileRouting } from './profile-routing.module';


@NgModule({
  declarations: [
    ProfileComponent,
  ],
  imports: [CommonModule,ProfileRouting ],
  providers: [],
})
export class ProfileModule {}
