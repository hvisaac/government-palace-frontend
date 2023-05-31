import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuController, ModalController, NavController } from '@ionic/angular';

import { ConfigService } from 'src/app/services/config.service';
import { Chart } from 'chart.js';
import { ReportsPerDepartmentPage } from '../reports-per-department/reports-per-department.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  CurrentUser: any;
  @ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;
  barChart: any;
  doughnutChart: any;
  departments: any[] = [];
  departmentsNames: any[] = [];
  departmentsColors: any[] = [];
  departmentsReports: any[] = [];
  departmentsWorkingReports: any[] = [];
  departmentsFinishedsReports: any[] = [];
  waitingRepots: number = 0
  workingRepots: number = 0
  solvedRepots: number = 0
  option: number;
  reportsLoaded: boolean = false;

  constructor(
    private menuController: MenuController,
    private navController: NavController,
    private configService: ConfigService,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.menuController.enable(false);
    this.CurrentUser = JSON.parse(sessionStorage.getItem('user'));
    if (this.CurrentUser == null) {
      this.navController.navigateRoot('/login');
    } else {
      this.menuController.enable(true);
      this.configService.getDepartments().subscribe((departments: any[]) => {
        if (departments) {
          for (const department of departments) {
            department.secretariat = JSON.parse(department.secretariat)[0];
            if (department.secretariat.available && department.available && department.name != "Spam") {
              this.departments.push(department);
              this.departmentsNames.push(department.name);
              this.departmentsColors.push(department.color);
              this.departmentsReports.push(department.reports);
              this.departmentsWorkingReports.push(department.workingReports);
              this.departmentsFinishedsReports.push(department.finishedsReports);
              this.waitingRepots += department.reports
              this.workingRepots += department.workingReports
              this.solvedRepots += department.finishedsReports
            }
          }
          this.reportsLoaded = true;
        }
      });
      this.configService.getSecretariats().subscribe((secretariats: any) => {
        if (secretariats) {
          for (const secretariat of secretariats) {
            if (this.CurrentUser.secretariat && secretariat._id == this.CurrentUser.secretariat) {
              this.CurrentUser.secretariat = secretariat
            }
          }
        }
      })
    }
  }

  ngAfterViewInit(){
    setTimeout(() => {
      if (this.CurrentUser.hierarchy.level < 2) {
        this.doughnutChartMethod();
      } else {
        this.doughnutChartMethodDepartment(this.CurrentUser.hierarchy.level);
      }
    }, 1500);
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

  doughnutChartMethodDepartment(hierarchy) {
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
          switch (hierarchy) {
            case 2:
              for (const department of this.CurrentUser.secretariat.departments) {
                if (department._id == this.departments[element[0].index]._id) {
                  this.openReports(department._id)
                }
              }
              break;
            case 3:
              if (this.CurrentUser.department == this.departments[element[0].index]._id) {
                this.openReports(this.departments[element[0].index]._id);
              }
            default:
              break;
          }
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

    await modal.onDidDismiss().then(() => window.location.reload());

  }

}
