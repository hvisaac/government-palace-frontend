import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WhatsappApiService {

  auth_token = 'EAARAikDa21YBAKJWJdogYenjUuiRjM032rZCixiWBkMj0yjsn00RlOygSmHmqyULrPfvaBDFZBtnAoUuTzxIaFA5vz9ZBWZBWAKSLz8Wk0YvqYI42DNDKotGv1T5DIG4ZB2xk3lwhlsjkD7D3TePTQbjM9aK7b6BFdZB57o345KDvsIJS6DmjZApskEPvVf12ZAhyU7b2wZBZA2I1ZCw59g6fCp';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.auth_token}`
  });

  constructor(
    private http: HttpClient
  ) { }

  testMessage() {
    const message = {
      messaging_product: "whatsapp",
      to: "526621213466",
      type: "template",
      template: {
        name: "hello_world",
        language: {
          code: "en_US"
        }
      }
    }
    return this.http.post('https://graph.facebook.com/v15.0/103243179330911/messages', message, { headers: this.headers });
  }

  resolveReport(phones, description, folio, photo) {

    const request = {
      photo: `${environment.imagesServer}/${photo}/solved.png`,
      description: description,
      folio: folio,
      phones: phones
    }

    return this.http.post('', request);
  }

}
