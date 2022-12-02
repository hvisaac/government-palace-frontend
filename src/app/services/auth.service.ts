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
    console.log(`${environment.api}/sign-in`);
    return this.http.post(`${environment.api}/sign-in`, request);
  }

  SignUp
    (
      phone: string,
      password: string,
      name: string,
      lastname: string
    ) {
    let request = {
      phone: phone,
      password: password,
      name: name,
      lastname: lastname,
      urlPhoto: "url",
      type: 1
    }
    return this.http.post(`${environment.api}/sign-up`, request);
  }

}
