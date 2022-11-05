import { Component, ViewChild } from '@angular/core';
import { IonSegment, MenuController, NavController, ModalController } from '@ionic/angular';
import { MapService } from 'src/app/services/map.service';
import { UserInterface } from '../../interfaces/user-interface';
import { ReportService } from '../../services/report.service';
import { StreetLightingReportPage } from '../street-lighting-report/street-lighting-report.page';
import { WaterPage } from '../water/water.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  segment = 'all';
  CurrentUser: UserInterface;
  Reports: any[] = [];

  constructor
    (
      private NavController: NavController,
      private ReportService: ReportService,
      private MenuController: MenuController,
      private ModalController: ModalController,
      private MapService: MapService,
    ) { }

  ngOnInit() {
    this.MenuController.enable(true);
    this.CurrentUser = JSON.parse(sessionStorage.getItem('user'));
    if (this.CurrentUser[0]._id == '' || this.CurrentUser[0]._id == null) {
      this.NavController.navigateRoot('/login');
    }

    this.ReportService.getMyReports(this.CurrentUser[0]._id).subscribe((Reports: any) => {
      console.log(Reports);
      for (let report of Reports) {
        report.department = JSON.parse(report.department);
        this.Reports.push(report);
      }
      console.log(this.Reports);
    });
  }

  async openStreetLightingRerpot() {
    const modal = await this.ModalController.create({
      component: StreetLightingReportPage,
      componentProps: {
        CurrentUser: this.CurrentUser,
      }
    });

    modal.present();
  }

  async openWaterRerpot() {
    const modal = await this.ModalController.create({
      component: WaterPage,
    });

    modal.present();
  }

  segmentChange(event) {
    this.segment = event.detail.value;
  }

  ionViewDidEnter() {
    for (let i = 0; i < this.Reports.length; i++) {
      this.MapService.initOSMWithDescription(this.Reports[i].geolocation.latitude, this.Reports[i].geolocation.longitude, 'map'+i,  this.Reports[i].photo);
    }
  }
}
