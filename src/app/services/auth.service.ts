import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.http.post('http://192.168.1.200:3000/sign-in', request);
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
    return this.http.post('http://192.168.1.200:3000/sign-up', request);
  }

}
