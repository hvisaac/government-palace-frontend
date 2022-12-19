import { Component, ViewChild } from '@angular/core';
import { AlertController, IonItem, ModalController, NavController } from '@ionic/angular';
import { ReportsPerDepartmentPage } from './pages/reports-per-department/reports-per-department.page';
import { SettingsPage } from './pages/settings/settings.page';
import { ConfigService } from './services/config.service';
import { ReportService } from './services/report.service';
import { Platform } from '@ionic/angular'; 

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  Departments: any[] = [];
  AllReports: any[] = [];
  constructor(
    private configService: ConfigService,
    private reportService: ReportService,
    private navController: NavController,
    private alertController: AlertController,
    private modalController: ModalController,
    private platform: Platform,
  ) {
  }

  ngOnInit() {
    console.log('entra');

    this.configService.getDepartments().subscribe((data: any) => {
      this.Departments = data;
    });

    this.reportService.countAllReports().subscribe((data: any) => {
      this.AllReports = data;
    });

  }

  async openSettings(){
    const currentUser = JSON.parse(sessionStorage.getItem('user'));
    const modal = await this.modalController.create({
      component: SettingsPage,
      componentProps: {
        id: currentUser[0]._id,
        username: currentUser[0].name,
        password: currentUser[0].password,
        hierarchy: currentUser[0].hierarchy.level
      }
    });

    await modal.present();
  }

  async validation() {

    let admin = false
    const permissions = JSON.parse(sessionStorage.getItem('permissions'));
    if (permissions[0].superUser && permissions[0].canCreate && permissions[0].canEdit && permissions[0].canDelete) {
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
