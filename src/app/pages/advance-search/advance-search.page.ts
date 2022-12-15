import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { UserInterface } from 'src/app/interfaces/user-interface';
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

  CurrentUser: UserInterface;
  Reports: any[] = [];

  constructor(
    private reportService: ReportService,
    private NavController: NavController,
    private MenuController: MenuController,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.MenuController.enable(false);
    this.CurrentUser = JSON.parse(sessionStorage.getItem('user'));
    console.log(this.CurrentUser);
    if (this.CurrentUser == null) {
      this.NavController.navigateRoot('/login');
    } else {
      this.MenuController.enable(true);
    }
  }

  searchReports(option: number) {
    if (option == 1) {

    }
    if (option == 2) {
      this.getByContent(this.content);
    }
    if (option == 3) {
      this.getByDate(this.beginDate, this.finalDate);
    }
  }

  getByDate(beginDate: Date, finalDate: Date) {
    this.reportService.getReportsByDate(beginDate, finalDate).subscribe((reports: any) => {
      let formatReports: any[] = [];
      for (let report of reports) {
        report.department = JSON.parse(report.department);
        formatReports.push(report);
      }
      console.log(formatReports)
      this.openReports(formatReports);
    });
  }

  getByContent(content: string) {
    this.reportService.getReportByContent(content).subscribe((reports: any) => {
      let formatReports: any[] = [];
      for (let report of reports) {
        report.department = JSON.parse(report.department);
        console.log(report);
        formatReports.push(report);
      }
      console.log(formatReports)
      this.openReports(formatReports);
    });
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
