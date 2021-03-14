import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/modules/login/pages/login/login.component';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit{
  public isLoggedIn: boolean;
  public nickName: string;
  public profileToggle: boolean = false;
  public isShowNav: boolean = false;

  @ViewChild('header',({ static: true,read: ElementRef })) header: ElementRef;
  constructor(public dialog: MatDialog, private authService: AuthService,private render:Renderer2) {}

  ngOnInit(): void {
    this.checkLoggedIn();
    // window.addEventListener('scroll', this.scroll, true);
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    if( event.srcElement.scrollingElement.scrollTop > 32){
      this.render.addClass(this.header.nativeElement,'headerShadow')
    }else{
      this.render.removeClass(this.header.nativeElement,'headerShadow')
    }
  }

  // scroll = (event): void => {
  //   if( event.srcElement.scrollingElement.scrollTop > 32){
  //     this.render.addClass(this.header.nativeElement,'headerShadow')
  //   }else{
  //     this.render.removeClass(this.header.nativeElement,'headerShadow')
  //   }
  // };

  showNav() {
    this.isShowNav = !this.isShowNav;
  }

  checkLoggedIn() {
    this.isLoggedIn = this.authService.isLoggedIn();
    if (this.isLoggedIn) {
      this.nickName = this.authService.userInfo().nickname;
    }
  }

  showProfileDetail() {
    this.profileToggle = !this.profileToggle;
  }

  login() {
    const dialogRef = this.dialog.open(LoginComponent);
  }

  logout() {
    this.authService.loggedOut();
  }
}
