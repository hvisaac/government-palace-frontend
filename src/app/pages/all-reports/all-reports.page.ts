import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { UserInterface } from 'src/app/interfaces/user-interface';
import { ReportService } from 'src/app/services/report.service';
import { GaleryPage } from '../galery/galery.page';
import { MapPage } from '../map/map.page';

@Component({
  selector: 'app-all-reports',
  templateUrl: './all-reports.page.html',
  styleUrls: ['./all-reports.page.scss'],
})
export class AllReportsPage implements OnInit {

  CurrentUser: any;
  Reports: any[] = [];

  constructor
    (
      private NavController: NavController,
      private ReportService: ReportService,
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
      if (this.CurrentUser[0].type == 1) {
        this.MenuController.enable(true);
        this.ReportService.getAllReports().subscribe((Reports: any) => {
          console.log(Reports);
          for (let report of Reports) {
            report.department = JSON.parse(report.department);
            this.Reports.push(report);
          }
        });
      } else {
        this.ReportService.getMyReports(this.CurrentUser[0].department).subscribe((reports: any[]) => {
          for (let report of reports) {
            report.department = JSON.parse(report.department);
            this.Reports.push(report);
          }
        });
      }
    }
  }

  openMenu() {
    this.MenuController.open();
  }

  async openMap() {
    let coordinates = await Geolocation.getCurrentPosition();
    const modal = await this.modalController.create({
      component: MapPage,
      componentProps: {
        Latitude: coordinates.coords.latitude,
        Longitude: coordinates.coords.longitude,
      }
    });

    await modal.present();

  }

  async openPhoto(_id: string) {
    const modal = await this.modalController.create({
      component: GaleryPage,
      componentProps: {
        _idReport: _id,
      }
    });

    await modal.present();

  }

  changeStatus(_id: string, status: number) {
    this.ReportService.changeStatus(_id, status).subscribe(Response => {
      console.log(Response);
      this.doRefresh();
    });
  }

  doRefresh() {
    this.Reports = [];
    console.log('entra')
    setTimeout(() => {
      if (this.CurrentUser[0].type == 1) {
        this.MenuController.enable(true);
        this.ReportService.getAllReports().subscribe((Reports: any) => {
          console.log(Reports);
          for (const report of Reports) {
            report.department = JSON.parse(report.department);
            this.Reports.push(report);
          }
        });
      } else {
        this.ReportService.getMyReports(this.CurrentUser.department).subscribe((reports: any[]) => {
          console.log('entra')
          for (const report of reports) {
            report.department = JSON.parse(report.department);
            this.Reports.push(report);
            console.log('entra')
          }
        });
      }
    }, 1000);
  }

}
