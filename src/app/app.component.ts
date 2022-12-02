import { Component } from '@angular/core';
import { ConfigService } from './services/config.service';
import { ReportService } from './services/report.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  Departments: any[] = [];
  AllReports;

  constructor(
    private configService: ConfigService,
    private reportService: ReportService,
  ) {
    

  }

  ngOnInit() {

    this.configService.getDepartments().subscribe((data: any) => {
      this.Departments = data;
    });

    console.log(this.reportService.countAllReports().subscribe((data: any) => {
      this.AllReports = data;
    }));

  }

}
