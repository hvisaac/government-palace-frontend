import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  getMyReports(IdUser: string){
    return this.http.get(`http://192.168.1.200:3000/my-reports/${IdUser}`);
  }

  saveReport(report: any) {
    return this.http.post("http://192.168.1.200:3000/my-reports/save-report", report);
  }
}
