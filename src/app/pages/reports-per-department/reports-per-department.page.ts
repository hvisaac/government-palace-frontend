import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, MenuController, ModalController, NavController, ToastController } from '@ionic/angular';
import { ConfigService } from 'src/app/services/config.service';
import { MapService } from 'src/app/services/map.service';
import { ReportService } from 'src/app/services/report.service';
import { FinishReportPage } from '../finish-report/finish-report.page';
import { GaleryPage } from '../galery/galery.page';
import { MapPage } from '../map/map.page';
import * as moment from 'moment';
import { NotesPage } from '../notes/notes.page';
import { ExportService } from 'src/app/services/export.service';

@Component({
  selector: 'app-reports-per-department',
  templateUrl: './reports-per-department.page.html',
  styleUrls: ['./reports-per-department.page.scss'],
})
export class ReportsPerDepartmentPage implements OnInit {

  @Input() typeReport;
  @Input() departmentToTransfer: string;
  CurrentUser: any;
  Reports: any[] = [];
  departmentName: string;
  departmentIcon: string;
  departmentColor: string;
  photo: string = '';
  departments: any[] = [];
  reportsLoaded: boolean = false;
  waitingReports: number = 0;
  workingReports: number = 0;
  finishedReports: number = 0;

  constructor
    (
      private NavController: NavController,
      private ReportService: ReportService,
      private MenuController: MenuController,
      private MapService: MapService,
      private modalController: ModalController,
      private alertController: AlertController,
      private toastController: ToastController,
      private configService: ConfigService,
      private actionSheetCtrl: ActionSheetController,
      private exportService: ExportService
    ) { }

  ngOnInit() {

    this.CurrentUser = JSON.parse(sessionStorage.getItem('user'));

    if (this.CurrentUser == null) {
      this.NavController.navigateRoot('/login');
    } else {
      if (true) {
        setTimeout(() => {
          this.ReportService.getMyReports(this.typeReport).subscribe((Reports: any) => {
            if (Reports) {
              for (let report of Reports) {
                report.department = JSON.parse(report.department);
                this.Reports.push(report);
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
              this.configService.getDepartments().subscribe((data: any) => {
                for (const department of data) {
                  department.secretariat = JSON.parse(department.secretariat)[0];
                  if (department.secretariat.available && department.available) {
                    this.departments.push(department);
                  }
                }
              });
              this.departmentName = Reports[0].department.name;
              this.departmentIcon = Reports[0].department.icon;
              this.departmentColor = Reports[0].department.color;
              this.reportsLoaded = true;
              this.Reports.sort((n1, n2) => {
                if (n1.count > n2.count) {
                  return -1;
                }

                if (n1.count < n2.count) {
                  return 1;
                }

                return 0;
              });
            }
          });
        }, 1000);

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
    if (this.CurrentUser.permissions.workingStatus || this.CurrentUser.hierarchy.level == 0) {
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

  async onClickWorkingReport(id, folio, icon, phones, description, photo, createdAt) {
    if (this.CurrentUser.permissions.workingStatus || this.CurrentUser.hierarchy.level == 0) {
      const alert = await this.alertController.create({
        mode: 'ios',
        header: 'Alerta',
        subHeader: 'Cambio de estado de reporte',
        message: `Reporte #${folio} con estatus <ion-icon name="construct"></ion-icon> (trabajando)`,
        buttons: [
          {
            text: "Regresar a espera",
            role: 'confirm',
            handler: () => {
              console.log(this.CurrentUser.permissions)
              if (this.CurrentUser.permissions.waitingStatus) {
                this.changeStatus(id, 0);
              } else {
                this.presentToast("No tienes permisos para regresar el estatus")
              }
            },
          },
          {
            text: "Finalizar",
            role: 'confirm',
            handler: () => {
              this.openFinishReport(id, folio, icon, phones, description, photo, createdAt);
            },
          }
        ],
      });

      await alert.present();
    }
  }

  async openFinishReport(id, folio, icon, phones, description, photo, createdAt) {
    if (this.CurrentUser.permissions.finishStatus || this.CurrentUser.hierarchy.level == 0) {
      const modal = await this.modalController.create({
        component: FinishReportPage,
        componentProps: {
          id: id,
          folio: folio,
          icon: icon,
          phones: phones,
          description: description,
          photo: photo,
          createdAt: createdAt
        }
      });

      await modal.present();

      const data: any = await modal.onDidDismiss();


      if (data.data.response == 'success') {
        this.doRefresh();
        this.presentToast(`El reporte ${data.data.folio} ha finalizado exitosamente`);
      }
    } else {
      this.presentToast("No tienes permisos para finalizar el reporte")
    }
  }

  changeStatus(_id: string, status: number) {

    this.ReportService.changeStatus(_id, status).subscribe(Response => {
      console.log(Response);
      this.doRefresh();
    });

  }

  transferReport(_id: string, department: string) {
    if (this.CurrentUser.permissions.transfer || this.CurrentUser.hierarchy.level == 0) {
      this.ReportService.transferReport(_id, department).subscribe(Response => {
        console.log(Response);
        this.doRefresh();
      });
    } else {
      this.presentToast('No tienes permisos para transferir');
    }
  }

  doRefresh() {
    this.Reports = [];
    this.reportsLoaded = false;
    setTimeout(() => {
      this.ReportService.getMyReports(this.typeReport).subscribe((reports: any[]) => {

        this.waitingReports = 0;
        this.workingReports = 0;
        this.finishedReports = 0;
        for (const report of reports) {
          report.department = JSON.parse(report.department);
          this.Reports.push(report);
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
        this.Reports.sort((n1, n2) => {
          if (n1.count > n2.count) {
            return -1;
          }

          if (n1.count < n2.count) {
            return 1;
          }

          return 0;
        });
      });

      this.reportsLoaded = true
    }, 1000);
  }

  async attachNoteAlert(_id) {
    const alert = await this.alertController.create({
      mode: 'ios',
      header: 'Escriba la nota que desee agregar',
      inputs: [
        {
          name: 'note',
          type: 'textarea',
          placeholder: 'Nota (max 150 characteres)',
          attributes: {
            maxlength: 150,
          },
        },
      ],
      buttons: [
        {
          text: "Agregar",
          role: 'confirm',
          handler: (alertData) => {
            this.ReportService.addNote(_id, alertData.note).subscribe(() => {
              this.doRefresh()
            });
          },
        }
      ],
    });

    await alert.present();
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });

    await toast.present();
  }

  async presentActionSheet(_id, notes, folio) {
    const actionSheet = await this.actionSheetCtrl.create({
      mode: 'ios',
      header: 'Notas',
      buttons: [
        {
          text: 'Agregar nota',
          icon: 'attach',
          handler: () => {
            this.attachNoteAlert(_id)
          }
        },
        {
          text: 'Ver notas',
          icon: 'documents',
          handler: async () => {
            const modal = await this.modalController.create({
              component: NotesPage,
              componentProps: {
                notes: notes,
                tittle: folio
              }
            });

            await modal.present();

            this.doRefresh()
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();

  }

  exportToExcel() {
    const reportXLSX = []
    for (const report of this.Reports) {

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
          users += `, ${report.users[i]}`
        }
      }

      reportXLSX.push({
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

  dismiss() {
    this.modalController.dismiss();
  }

}
