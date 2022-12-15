import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { MapService } from 'src/app/services/map.service';
import { UserInterface } from '../../interfaces/user-interface';
import { ReportService } from '../../services/report.service';
import { Geolocation } from '@capacitor/geolocation';
import { MapPage } from '../map/map.page';
import { GaleryPage } from '../galery/galery.page';
import { ConfigService } from 'src/app/services/config.service';
import { Chart } from 'chart.js';
import { ReportsPerDepartmentPage } from '../reports-per-department/reports-per-department.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  CurrentUser: UserInterface;
  @ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;
  barChart: any;
  doughnutChart: any;
  departments: any[] = [];
  departmentsNames: any[] = [];
  departmentsColors: any[] = [];
  departmentsReports: any[] = [];
  departmentsWorkingReports: any[] = [];
  departmentsFinishedsReports: any[] = [];
  option: number;

  constructor(
    private menuController: MenuController,
    private navController: NavController,
    private configService: ConfigService,
    private modalController: ModalController,

  ) { }

  ngOnInit() {
    this.menuController.enable(false);
    this.CurrentUser = JSON.parse(sessionStorage.getItem('user'));
    console.log(this.CurrentUser);
    if (this.CurrentUser == null) {
      this.navController.navigateRoot('/login');
    } else {
      this.menuController.enable(true);
      let superUser = false;
      this.configService.getUserType(this.CurrentUser[0].role).subscribe((role: any) => {
        superUser = role[0].superUser;
        console.log(role)
      })
      this.configService.getDepartments().subscribe((departments: any[]) => {
        this.departments = departments;
        for (const department of departments) {
          this.departmentsNames.push(department.name);
          this.departmentsColors.push(department.color);
          this.departmentsReports.push(department.reports);
          this.departmentsWorkingReports.push(department.workingReports);
          this.departmentsFinishedsReports.push(department.finishedsReports);
        }
      });

      setTimeout(() => {
        if (superUser) {
          this.doughnutChartMethod();
        } else {
          this.doughnutChartMethodDepartment(this.CurrentUser[0].department);
        }
      }, 1500);
    }
  }

  openMenu() {
    this.menuController.open();
  }


  doughnutChartMethod() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'pie',
      data: {
        labels: this.departmentsNames,
        datasets: [{
          label: 'Reportes',
          data: this.departmentsReports,
          backgroundColor: this.departmentsColors,
          hoverBackgroundColor: this.departmentsColors
        }],
      },
      options: {
        onClick: (event, element, chart) => {
          this.openReports(this.departments[element[0].index]._id);
        },
        plugins: {
          tooltip: {
            enabled: false,
          },
          legend: {
            labels: {
              // This more specific font property overrides the global property
              color: '#f6f5f5',
              font: {
                weight: 'bold',
              }
            },
            fullSize: true,

          }
        }
      }
    });
  }

  doughnutChartMethodDepartment(department) {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'pie',
      data: {
        labels: this.departmentsNames,
        datasets: [{
          label: 'Reportes',
          data: this.departmentsReports,
          backgroundColor: this.departmentsColors,
          hoverBackgroundColor: this.departmentsColors
        }],
      },
      options: {
        onClick: () => {
          console.log(department)
          this.openReports(department);
        },
        plugins: {
          tooltip: {
            enabled: false,
          },
          legend: {
            labels: {
              // This more specific font property overrides the global property
              color: '#f6f5f5',
              font: {
                weight: 'bold',
              }
            },
            fullSize: true,

          }
        }
      }
    });
  }

  async openReports(id) {
    const modal = await this.modalController.create({
      component: ReportsPerDepartmentPage,
      componentProps: {
        typeReport: id,
      }
    });

    await modal.present();

  }

}
