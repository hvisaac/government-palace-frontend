import { Component, ViewChild } from '@angular/core';
import { AlertController, IonItem, ModalController, NavController } from '@ionic/angular';
import { ReportsPerDepartmentPage } from './pages/reports-per-department/reports-per-department.page';
import { ConfigService } from './services/config.service';
import { ReportService } from './services/report.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  Departments: any[] = [];
  AllReports: any[] = [];
  permissions: any;
  constructor(
    private configService: ConfigService,
    private reportService: ReportService,
    private navController: NavController,
    private alertController: AlertController,
    private modalController: ModalController
  ) {


  }

  ngOnInit() {

    this.configService.getDepartments().subscribe((data: any) => {
      this.Departments = data;
    });

    console.log(this.reportService.countAllReports().subscribe((data: any) => {
      this.AllReports = data;
    }));

  }

  async validation() {
    let admin = false
    this.permissions = JSON.parse(sessionStorage.getItem('permissions'));
    if (this.permissions[0].superUser && this.permissions[0].canCreate && this.permissions[0].canEdit && this.permissions[0].canDelete) {
      admin = true;
    }

    if (admin) {
      window.location.href = 'global-settings';
    } else {
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'No tienes permisos para esta función',
      buttons: ['OK'],
    });

    await alert.present();
  }

  logout() {
    sessionStorage.clear();
    this.navController.navigateRoot('/login');
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
