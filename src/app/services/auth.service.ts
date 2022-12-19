import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  SignIn(name: string, password: string) {
    let request = {
      name: name,
      password: password
    }
    console.log(`${environment.api}/sign-in`);
    return this.http.post(`${environment.api}/sign-in`, request);
  }

  SignUp (request) {

    return this.http.post(`${environment.api}/sign-up`, request);
  }

}
