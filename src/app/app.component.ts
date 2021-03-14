import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadingService } from './core/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'bazinama';
  showLoading: boolean = true;
  constructor(private loadingService: LoadingService,private cdRef:ChangeDetectorRef) {}

  ngOnInit(): void {
    this.checkLoading();
  }

  checkLoading(){
    this.loadingService.getLoadingState().subscribe((status) => {
      status === 'start'
        ? (this.showLoading = true)
        : (this.showLoading = false);
        this.cdRef.detectChanges();
    });
  }
}
