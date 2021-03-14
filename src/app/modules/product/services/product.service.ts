import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private activateRoute: ActivatedRoute
  ) {}

  getProductList(id: number): Observable<any> {
    let url = `${this.baseUrl}/product/${id}?device_os=ios`;
    return this.http.get(url);
  }

  getCommentList(id: number): Observable<any> {
    let url = `${this.baseUrl}/comment/${id}`;
    return this.http.get(url);
  }

}
