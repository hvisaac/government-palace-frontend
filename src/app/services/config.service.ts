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

  enableDepartment(id) {
    let request = {
      available: true
    }
    return this.http.put(`${environment.api}/config/${id}/department`, request);
  }
  disableDepartment(id) {
    let request = {
      available: false
    }
    return this.http.put(`${environment.api}/config/${id}/department`, request);
  }
  switchSecretariat(id, available) {
    let request = {
      available: available
    }

    return this.http.put(`${environment.api}/config/${id}/switch-secretariat`, request);
  }
  enableSecretariat(id) {
    let request = {
      available: true
    }
    return this.http.put(`${environment.api}/config/${id}/secretariat`, request);
  }
  disableSecretariat(id) {
    let request = {
      available: false
    }
    return this.http.put(`${environment.api}/config/${id}/secretariat`, request);
  }
  enableServicePhone(id) {
    let request = {
      available: true
    }
    return this.http.put(`${environment.api}/config/${id}/service-phone`, request);
  }
  disableServicePhone(id) {
    let request = {
      available: false
    }
    return this.http.put(`${environment.api}/config/${id}/service-phone`, request);
  }
  enableHierarchy(id) {
    let request = {
      available: true
    }
    return this.http.put(`${environment.api}/${id}/hierarchy`, request);
  }
  disableHierarchy(id) {
    let request = {
      available: false
    }
    return this.http.put(`${environment.api}/${id}/hierarchy`, request);
  }
  getDepartments() {
    return this.http.get(`${environment.api}/config/departments`);
  }

  getSecretariats() {
    return this.http.get(`${environment.api}/config/secretariats`);
  }

  getServicePhones() {
    return this.http.get(`${environment.api}/config/service-phones`);
  }

  getHierarchies() {
    return this.http.get(`${environment.api}/hierarchies`);
  }

  addServicePhones(servicePhone) {
    return this.http.post(`${environment.api}/config/service-phones`, servicePhone);
  }

  addSecretariat(secretariat) {
    return this.http.post(`${environment.api}/config/secretariat`, secretariat);
  }

  addHierarchy(hierarchy) {
    return this.http.post(`${environment.api}/hierarchy`, hierarchy);
  }

  addDepartment(department) {
    return this.http.post(`${environment.api}/config/department`, department);
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

  updateSecretariat(object){
    return this.http.put(`${environment.api}/config/${object.id}/secretariat`, object);
  }

  updateHierarchy(object){
    return this.http.put(`${environment.api}/${object.id}/hierarchy`, object);
  }

  updateServicePhone(object){
    return this.http.put(`${environment.api}/config/${object.id}/service-phone`, object);
  }
}
