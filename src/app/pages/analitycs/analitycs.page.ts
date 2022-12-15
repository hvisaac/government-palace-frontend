import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { UserInterface } from 'src/app/interfaces/user-interface';
import { Chart } from 'chart.js/auto';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-analitycs',
  templateUrl: './analitycs.page.html',
  styleUrls: ['./analitycs.page.scss'],
})
export class AnalitycsPage implements OnInit {

  CurrentUser: UserInterface;
  @ViewChild('barCanvas') private barCanvas: ElementRef;
  @ViewChild('pointCanvas') private pointCanvas: ElementRef;
  barChart: any;
  pointChart: any;
  Names: any[] = [];
  Colors: any[] = [];
  Reports: any[] = [];
  PendingReports: any[] = [];
  WorkingReports: any[] = [];
  FinishedsReports: any[] = [];
  option: number;

  constructor(
    private menuController: MenuController,
    private navController: NavController,
    private configService: ConfigService
  ) { }

  ngOnInit() {
    this.menuController.enable(false);
    this.CurrentUser = JSON.parse(sessionStorage.getItem('user'));
    console.log(this.CurrentUser);
    if (this.CurrentUser == null) {
      this.navController.navigateRoot('/login');
    } else {
      this.menuController.enable(true);
      this.configService.getDepartments().subscribe((departments: any[]) => {
        for (const department of departments) {
          this.Names.push(department.name);
          this.Colors.push(department.color);
          this.Reports.push(department.reports);
          this.PendingReports.push(department.pendingReports);
          this.WorkingReports.push(department.workingReports);
          this.FinishedsReports.push(department.finishedsReports);
        }
      });
    }
  }

  segmentChange(event) {
    if (event.detail.value == 1) {
      setTimeout(() => {
        this.barChartMethod();
      }, 1500);
    }

    if (event.detail.value == 2) {
      setTimeout(() => {
        this.pointChartMethod();
      }, 1500);

    }
  }

  openMenu() {
    this.menuController.open();
  }

  barChartMethod() {
    // Now we need to supply a Chart element reference with an object that defines the type of chart we want to use, and the type of data we want to display.
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: this.Names,
        datasets: [{
          label: 'Pendientes',
          data: this.PendingReports,
          backgroundColor: '#b8b8b8',
          borderColor: '#b8b8b8',
          borderWidth: 1
        },
        {
          label: 'Trabajando',
          data: this.WorkingReports,
          backgroundColor: 'rgb(245, 231, 35)',
          borderColor: 'rgb(245, 231, 35)',
          borderWidth: 1
        },
        {
          label: 'Resueltos',
          data: this.FinishedsReports,
          backgroundColor: '#0e9605',
          borderColor: '#0e9605',
          borderWidth: 1
        }],
      },
      options: {
        scales: {
          x: {
            ticks: {
              color: this.Colors,
              font: {
                size: 13,
                weight: 'bold',
              },
            }
          },
          y: {
            ticks: {
              color: '#f6f5f5',
            }

          }
        },
        plugins: {
          legend: {
            labels: {
              // This more specific font property overrides the global property
              color: '#f6f5f5',
              font: {
                weight: 'bold',
              }
            }
          }
        }
      }
    });
  }

  pointChartMethod() {

    this.pointChart = new Chart(this.pointCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: this.Names,
        datasets: [{
          label: 'Reportes',
          data: this.PendingReports,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        scales: {
          x: {
            ticks: {
              color: this.Colors,
              font: {
                size: 13,
                weight: 'bold',
              },
            }
          },
          y: {
            ticks: {
              color: '#f6f5f5',
            }

          }
        },
        plugins: {
          legend: {
            labels: {
              // This more specific font property overrides the global property
              color: '#f6f5f5',
              font: {
                weight: 'bold',
              }
            }
          }
        }
      }
    })
  }
}
