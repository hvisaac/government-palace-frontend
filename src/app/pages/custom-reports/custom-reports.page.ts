import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, ModalController, NavController, ToastController } from '@ionic/angular';
import { MapPage } from '../map/map.page';
import { GaleryPage } from '../galery/galery.page';
import { MapService } from 'src/app/services/map.service';
import { ReportService } from 'src/app/services/report.service';
import { ConfigService } from 'src/app/services/config.service';
import { ExportService } from 'src/app/services/export.service';
import * as moment from 'moment';
import { NotesPage } from '../notes/notes.page';

@Component({
  selector: 'app-custom-reports',
  templateUrl: './custom-reports.page.html',
  styleUrls: ['./custom-reports.page.scss'],
})
export class CustomReportsPage implements OnInit {
  @Input() reports: any[];
  CurrentUser: any;
  waitingReports: number = 0
  workingReports: number = 0
  finishedReports: number = 0

  constructor(
    private modalController: ModalController,
    private MapService: MapService,
    private NavController: NavController,
    private toastController: ToastController,
    private exportService: ExportService

  ) { }

  ngOnInit() {
    this.CurrentUser = JSON.parse(sessionStorage.getItem('user'));

    if (this.CurrentUser == null) {
      this.NavController.navigateRoot('/login');
    } else {
      for (let report of this.reports) {
        switch (report.status) {
          case 0:
            this.waitingReports++;
            break;
          case 1:
            this.workingReports++;
            break;
          case 2:
            this.finishedReports++;
            break;
          default:
            break;
        }
      }
    }
  }

  showMap() {
    for (let i = 0; i < this.reports.length; i++) {
      this.MapService.initOSMWithDescription(this.reports[i].geolocation.latitude, this.reports[i].geolocation.longitude, 'map' + i);
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

  calculateDays(init) {
    const ini = moment(init);
    const fin = moment(new Date());
    return fin.diff(ini, 'days') + 1;
  }

  calculateResolvedDays(init, final) {
    const ini = moment(init);
    const fin = moment(final);
    return fin.diff(ini, 'days');
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });

    await toast.present();
  }

  async viewNotes(notes, folio) {
    const modal = await this.modalController.create({
      component: NotesPage,
      componentProps: {
        notes: notes,
        tittle: folio
      }
    });

    await modal.present();
  }

  exportToExcel() {
    const reportXLSX = []
    for (const report of this.reports) {

      let status = report.status
      switch (status) {
        case 0:
          status = "en espera"
          break;
        case 1:
          status = "trabajando"
          break;
        case 2:
          status = "terminado"
          break;
        default:
          break;
      }
      let users = "";
      for (let i = 0; i < report.users.length; i++) {
        if (i == 0) {
          users += `${report.users[i]}`
        } else {
          users += `c${report.users[i]}`
        }
      }

      reportXLSX.push({
        "dirección": report.department.name,
        "folio": report.folio,
        "reportado": new Date(report.createdAt).toLocaleString(),
        "última actualización": new Date(report.updateAt).toLocaleString(),
        "status": status,
        "descripción del contribuyente": report.description,
        "foto del contribuyente": report.media.reportedImage,
        "descripción del funcionario": report.finishedDescription,
        "foto del funcionario": report.media.resolvedImage,
        "ubicación": `https://www.google.com.mx/maps/@${report.geolocation.latitude},${report.geolocation.longitude},17.5z`,
        "veces reportado": report.count,
        "contribuyentes": users,
        "notas": report.notes.length
      });
    }
    this.exportService.exportToExcel(reportXLSX, 'report');
  }

  dismiss(){
    this.modalController.dismiss();
  }
}
