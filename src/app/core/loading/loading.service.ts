import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  public count: number = 0;
  public ShowLoader = new BehaviorSubject<string>('');
  constructor() {}

  getLoadingState(): Observable<string> {
    return this.ShowLoader.asObservable();
  }

  requestStart() {
    this.count += 1;
    this.checkCount();
  }

  requestEnd() {
    this.count -= 1;
    this.checkCount();
  }

  checkCount() {
    if (this.count > 0) {
      this.ShowLoader.next('start');
    } else {
      this.ShowLoader.next('stop');
    }
  }
}
