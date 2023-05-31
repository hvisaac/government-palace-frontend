import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { ConfigService } from 'src/app/services/config.service';
import { ReportService } from 'src/app/services/report.service';
import { CustomReportsPage } from '../custom-reports/custom-reports.page';

@Component({
  selector: 'app-advance-search',
  templateUrl: './advance-search.page.html',
  styleUrls: ['./advance-search.page.scss'],
})
export class AdvanceSearchPage implements OnInit {

  option: number;
  beginDate: Date;
  finalDate: Date;
  content: string;

  CurrentUser: any;
  Reports: any[] = [];
  filter

  constructor(
    private reportService: ReportService,
    private NavController: NavController,
    private MenuController: MenuController,
    private modalController: ModalController,
    private configService: ConfigService
  ) { }

  ngOnInit() {
    this.MenuController.enable(false);
    this.CurrentUser = JSON.parse(sessionStorage.getItem('user'));
    if (this.CurrentUser == null) {
      this.NavController.navigateRoot('/login');
    } else {
      this.MenuController.enable(true);
    }
    this.configService.getSecretariats().subscribe((secretariats: any) => {
      if (secretariats) {
        if (this.CurrentUser.secretariat) {
          for (const secretariat of secretariats) {
            if (secretariat._id == this.CurrentUser.secretariat) {
              this.CurrentUser.secretariat = secretariat
            }
          }
        }
      }
    })
  }

  searchReports(option: number) {
    if (option == 1) {
      this.getByContent(this.content);
    }
    if (option == 2) {
      if (this.beginDate == null) this.beginDate = new Date()
      if (this.finalDate == null) this.finalDate = new Date()
      this.getByDate(this.beginDate, this.finalDate);
    }
  }

  getByDate(beginDate: Date, finalDate: Date) {
    let formatReports: any[] = [];
    switch (this.CurrentUser.hierarchy.level) {
      case 0:
        this.reportService.getReportsByDate(beginDate, finalDate, '').subscribe((reports: any) => {
          for (let report of reports) {
            report.department = JSON.parse(report.department);
            formatReports.push(report);
          }
        });
        break;
      case 1:
        this.reportService.getReportsByDate(beginDate, finalDate, '').subscribe((reports: any) => {
          for (let report of reports) {
            report.department = JSON.parse(report.department);
            formatReports.push(report);
          }
        });
        break;
      case 2:
        for (const department of this.CurrentUser.secretariat.departments) {
          this.reportService.getReportsByDate(beginDate, finalDate, department._id).subscribe((reports: any) => {
            for (let report of reports) {
              report.department = JSON.parse(report.department);
              formatReports.push(report);
            }
          });
        }
        break;
      case 3:
        this.reportService.getReportsByDate(beginDate, finalDate, this.CurrentUser.department).subscribe((reports: any) => {
          for (let report of reports) {
            report.department = JSON.parse(report.department);
            formatReports.push(report);
          }
        });
        break;
      default:
        break;
    }
    this.openReports(formatReports);

  }

  getByContent(content: string) {
    let formatReports: any[] = [];
    switch (this.CurrentUser.hierarchy.level) {
      case 0:
        this.reportService.getReportByContent(content, '').subscribe((reports: any) => {
          for (let report of reports) {
            report.department = JSON.parse(report.department);
            formatReports.push(report);
          }
        });
        break;
      case 1:
        this.reportService.getReportByContent(content, '').subscribe((reports: any) => {
          for (let report of reports) {
            report.department = JSON.parse(report.department);
            formatReports.push(report);
          }
        });
        break;
      case 2:
        for (const department of this.CurrentUser.secretariat.departments) {
          this.reportService.getReportByContent(content, department._id).subscribe((reports: any) => {
            for (let report of reports) {
              report.department = JSON.parse(report.department);
              formatReports.push(report);
            }
          });
        }
        break;
      case 3:
        this.reportService.getReportByContent(content, this.CurrentUser.department).subscribe((reports: any) => {
          for (let report of reports) {
            report.department = JSON.parse(report.department);
            formatReports.push(report);
          }
        });
        break;
      default:
        break;
    }
    this.openReports(formatReports);

  }

  async openReports(reports: any[]) {
    const modal = await this.modalController.create({
      component: CustomReportsPage,
      componentProps: {
        reports: reports,
      }
    });

    await modal.present();

  }

  openMenu() {
    this.MenuController.open();
  }

}
