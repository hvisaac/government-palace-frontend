import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { UserInterface } from 'src/app/interfaces/user-interface';
import { MapService } from 'src/app/services/map.service';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-public-service',
  templateUrl: './public-service.page.html',
  styleUrls: ['./public-service.page.scss'],
})
export class PublicServicePage implements OnInit {

  CurrentUser: UserInterface;
  Reports: any[] = [];

  constructor
    (
      private NavController: NavController,
      private ReportService: ReportService,
      private MenuController: MenuController,
      private MapService: MapService,
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
        this.ReportService.getMyReports("1").subscribe((Reports: any) => {
          console.log(Reports);
          for (let report of Reports) {
            report.department = JSON.parse(report.department);
            this.Reports.push(report);
          }
        });
        setTimeout(() => {
          this.showMap();
        }, 3000);
      } else {
        this.NavController.navigateRoot('/home');
      }
    }
  }

  showMap() {
    for (let i = 0; i < this.Reports.length; i++) {
      this.MapService.initOSMWithDescription(this.Reports[i].geolocation.latitude, this.Reports[i].geolocation.longitude, 'map' + i);
    }
  }

  logout() {
    sessionStorage.clear();
    this.NavController.navigateRoot('/login');
  }

}
