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

  getServicePhones() {
    return this.http.get(`${environment.api}/config/service-phones`);
  }

  getHierarchies() {
    return this.http.get(`${environment.api}/hierarchy`);
  }

  addServicePhones(servicePhone) {
    return this.http.post(`${environment.api}/config/service-phones`, servicePhone);
  }

  addHierarchy(hierarchy) {
    return this.http.post(`${environment.api}/hierarchy`, hierarchy);
  }

  addDepartment(department) {
    return this.http.post(`${environment.api}/config/add-department`, department);
  }

  deleteDepartment(id){
    return this.http.delete(`${environment.api}/config/${id}/department`);
  }

  deleteHierarchy(id){
    return this.http.delete(`${environment.api}/${id}/hierarchy`);
  }

  deleteServicePhone(id){
    return this.http.delete(`${environment.api}/config/${id}/service-phone`);
  }

  updateDepartment(object){
    return this.http.put(`${environment.api}/config/${object.id}/department`, object);
  }

  updateHierarchy(object){
    return this.http.put(`${environment.api}/${object.id}/hierarchy`, object);
  }

  updateServicePhone(object){
    return this.http.put(`${environment.api}/config/${object.id}/service-phone`, object);
  }
}
