import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductSharedService {
  public baseUrl:string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getProductList(): Observable<any> {
    let url = `${this.baseUrl}/listproducts/233?limit=6&offset=0`;
    return this.http.get(url);
  }
}
