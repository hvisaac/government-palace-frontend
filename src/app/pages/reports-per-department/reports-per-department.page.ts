import { Component, Input, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { AlertController, MenuController, ModalController, NavController, ToastController } from '@ionic/angular';
import { UserInterface } from 'src/app/interfaces/user-interface';
import { ConfigService } from 'src/app/services/config.service';
import { MapService } from 'src/app/services/map.service';
import { PhotoService } from 'src/app/services/photo.service';
import { ReportService } from 'src/app/services/report.service';
import { FinishReportPage } from '../finish-report/finish-report.page';
import { GaleryPage } from '../galery/galery.page';
import { MapPage } from '../map/map.page';

@Component({
  selector: 'app-reports-per-department',
  templateUrl: './reports-per-department.page.html',
  styleUrls: ['./reports-per-department.page.scss'],
})
export class ReportsPerDepartmentPage implements OnInit {

  @Input() typeReport;
  CurrentUser: UserInterface;
  Reports: any[] = [];
  departmentName: string;
  departmentIcon: string;
  departmentColor: string;
  photo: string = '';

  constructor
    (
      private NavController: NavController,
      private ReportService: ReportService,
      private MenuController: MenuController,
      private MapService: MapService,
      private modalController: ModalController,
      private configService: ConfigService,
      private alertController: AlertController,
      private toastController: ToastController,
    ) { }

  ngOnInit() {

    this.CurrentUser = JSON.parse(sessionStorage.getItem('user'));
    console.log(this.CurrentUser)

    if (this.CurrentUser == null) {
      this.NavController.navigateRoot('/login');
    } else {
      if (true) {
        this.ReportService.getMyReports(this.typeReport).subscribe((Reports: any) => {
          console.log('reports -> ' + Reports);
          console.log('department => ' + this.typeReport);
          for (let report of Reports) {
            report.department = JSON.parse(report.department);
            this.Reports.push(report);
          }
          this.departmentName = Reports[0].department.name;
          this.departmentIcon = Reports[0].department.icon;
          this.departmentColor = Reports[0].department.color;
        });
      } else {
        this.NavController.navigateRoot('/home');
      }
    }
  }


  openMenu() {
    this.MenuController.open();
  }

  showMap() {
    for (let i = 0; i < this.Reports.length; i++) {
      this.MapService.initOSMWithDescription(this.Reports[i].geolocation.latitude, this.Reports[i].geolocation.longitude, 'map' + i);
    }
  }
  async openMap(latitude, longitude) {
    const modal = await this.modalController.create({
      component: MapPage,
      componentProps: {
        Latitude: latitude,
        Longitude: longitude,
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

  async presentAlert(id, status, folio, icon) {
    if (this.CurrentUser[0].permissions.workingStatus) {
      const alert = await this.alertController.create({
        header: 'Alerta',
        subHeader: 'Cambio de estado de reporte',
        message: `Está a punto de cambiar el estatus del reporte ${folio} a <ion-icon name="${icon}"></ion-icon> (trabajando), ¿Desea continuar?`,
        buttons: [
          {
            text: 'No',
            role: 'cancel',

          },
          {
            text: 'Si',
            role: 'confirm',
            handler: () => {
              this.changeStatus(id, status);
            },
          }
        ],
      });

      await alert.present();
    }
  }

  async openFinishReport(id, folio, icon) {
    if (this.CurrentUser[0].permissions.finishStatus) {
      const modal = await this.modalController.create({
        component: FinishReportPage,
        componentProps: {
          id: id,
          folio: folio,
          icon: icon
        }
      });

      await modal.present();

      const data: any = await modal.onDidDismiss();

      console.log(data.data.response);

      if (data.data.response == 'success') {
        this.doRefresh();
        this.presentToast(`El reporte ${data.data.folio} ha finalizado exitosamente`);
      }
    }
  }

  changeStatus(_id: string, status: number) {

    this.ReportService.changeStatus(_id, status).subscribe(Response => {
      this.doRefresh();
    });

  }

  doRefresh() {
    this.Reports = [];
    setTimeout(() => {

      this.ReportService.getMyReports(this.CurrentUser[0].department).subscribe((reports: any[]) => {
        for (const report of reports) {
          report.department = JSON.parse(report.department);
          this.Reports.push(report);
        }
      });

    }, 1000);
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });

    await toast.present();
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
