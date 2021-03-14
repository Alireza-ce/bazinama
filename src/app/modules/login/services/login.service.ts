import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public baseUrl:string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  postPhoneNumber(phoneNumber): Observable<any> {
    let url = `${this.baseUrl}/mobile_login_step1/5`;
    return this.http.post(url,phoneNumber);
  }

  acceptPhoneNumber(acceptInfo): Observable<any> {
    let url = `${this.baseUrl}/mobile_login_step2/5`;
    return this.http.post(url,acceptInfo);
  }
  
}
