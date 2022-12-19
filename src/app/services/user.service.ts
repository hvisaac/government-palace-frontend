import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${environment.api}/users/`);
  }

  getUsersPerDepartment(department: string) {
    return this.http.get(`${environment.api}/users/${{department}}`);
  }

  deleteUser(id){
    return this.http.delete(`${environment.api}/users/${id}/user`);
  }

  updateUser(object){
    return this.http.put(`${environment.api}/users/${object.id}/user`, object);
  }

  changeUserAndPassword(object){
    return this.http.put(`${environment.api}/users/${object.id}/user-and-password`, object);
  }
}
