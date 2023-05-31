import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  SignIn(phone: string, password: string) {
    let request = {
      phone: phone,
      password: password
    }

    return this.http.post(`${environment.api}/sign-in`, request);
  }

  SignUp (request) {

    return this.http.post(`${environment.api}/sign-up`, request);
  }

}
