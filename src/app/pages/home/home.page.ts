import { Component } from '@angular/core';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { MapService } from 'src/app/services/map.service';
import { UserInterface } from '../../interfaces/user-interface';
import { ReportService } from '../../services/report.service';
import { Geolocation } from '@capacitor/geolocation';
import { MapPage } from '../map/map.page';
import { GaleryPage } from '../galery/galery.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  CurrentUser: UserInterface;
  Reports: any[] = [];

  constructor
    (
      private NavController: NavController,
      private ReportService: ReportService,
      private MenuController: MenuController,
      private MapService: MapService,
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
    setTimeout(() => {
      this.Reports = [];
      this.ReportService.getMyReports(this.CurrentUser[0].department).subscribe((reports: any[]) => {
        for (let report of reports) {
          report.department = JSON.parse(report.department);
          this.Reports.push(report);
        }
      });
    }, 1500);
  }

  logout() {
    sessionStorage.clear();
    this.NavController.navigateRoot('/login');
  }
}
