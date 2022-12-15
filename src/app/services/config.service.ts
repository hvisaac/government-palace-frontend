import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(
    private http: HttpClient,
  ) { }

  getDepartments() {
    return this.http.get(`${environment.api}/config/departments`);
  }

  getUserTypes() {
    return this.http.get(`${environment.api}/config/user-types`);
  }

  getUserType(id) {
    return this.http.get(`${environment.api}/config/user-types/${id}`);
  }

  getServicePhones() {
    return this.http.get(`${environment.api}/config/service-phones`);
  }

  addServicePhones(servicePhone) {
    return this.http.post(`${environment.api}/config/service-phones`, servicePhone);
  }

  addDepartment(department) {
    return this.http.post(`${environment.api}/config/add-department`, department);
  }

  addUserType(userType) {
    return this.http.post(`${environment.api}/config/add-user-type`, userType);
  }

  deleteDepartment(id){
    return this.http.delete(`${environment.api}/config/${id}/department`);
  }

  deleteUserType(id){
    return this.http.delete(`${environment.api}/config/${id}/user-type`);
  }

  deleteServicePhone(id){
    return this.http.delete(`${environment.api}/config/${id}/service-phone`);
  }

  updateDepartment(object){
    return this.http.put(`${environment.api}/config/${object.id}/department`, object);
  }

  updateUserType(object){
    return this.http.put(`${environment.api}/config/${object.id}/user-type`, object);
  }

  updateServicePhone(object){
    return this.http.put(`${environment.api}/config/${object.id}/service-phone`, object);
  }
}
