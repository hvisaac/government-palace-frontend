import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  getAllReports() {
    return this.http.get(`${environment.api}/my-reports/`);
  }

  getReportById(_id: string) {
    return this.http.get(`${environment.api}/my-reports/get-by-id/${_id}`);
  }

  getReportByContent(content: string, department) {
    const request = {
      content: content,
      department: department
    }
    return this.http.post(`${environment.api}/my-reports/get-by-content`, request);
  }

  getReportsByDate(beginDate: Date, finalDate: Date, department) {
    const request = {
      beginDate: beginDate,
      finalDate: finalDate,
      department: department
    }

    return this.http.post(`${environment.api}/my-reports/get-by-date`, request);
  }

  getMyReports(department: string) {
    return this.http.get(`${environment.api}/my-reports/${department}`);
  }

  countAllReports() {
    return this.http.get(`${environment.api}/my-reports/count-all-reports`);
  }

  saveReport(report: any) {
    return this.http.post(`${environment.api}/my-reports/save-report`, report);
  }

  changeStatus(_id: string, status: number) {
    const request = {
      _id: _id,
      status: status,
    }
    return this.http.post(`${environment.api}/my-reports/change-status`, request);
  }

  finishReport(_id: string, photo: string, description: string, phones: string[]) {
    const request = {
      _id: _id,
      photo: photo,
      description: description,
      phones: phones
    }

    return this.http.post(`${environment.api}/my-reports/finish-report`, request);
  }

  transferReport(_id: string, departmentID: string) {
    let request = {
      department: departmentID
    }

    return this.http.put(`${environment.api}/my-reports/${_id}/report`, request);

  }

  addNote(_id, body) {
    const request = {
      "$push": {
        notes: {
          body: body
        }
      }
    }

    return this.http.put(`${environment.api}/my-reports/${_id}/report`, request);

  }
}
