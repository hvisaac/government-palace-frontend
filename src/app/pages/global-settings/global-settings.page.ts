import { Component, Input, OnInit } from '@angular/core';
import { MenuController, ModalController, NavController, ToastController } from '@ionic/angular';
import { UserInterface } from 'src/app/interfaces/user-interface';
import { ConfigService } from 'src/app/services/config.service';
import { UserService } from 'src/app/services/user.service';
import { RegisterDepartmentPage } from '../register-department/register-department.page';
import { RegisterHierarchyPage } from '../register-hierarchy/register-hierarchy.page';
import { RegisterServicePhonePage } from '../register-service-phone/register-service-phone.page';
import { RegisterUserPage } from '../register-user/register-user.page';
import { UpdateDepartmentPage } from '../update-department/update-department.page';
import { UpdateHierarchyPage } from '../update-hierarchy/update-hierarchy.page';
import { UpdateServicePhonePage } from '../update-service-phone/update-service-phone.page';
import { UpdateUserPage } from '../update-user/update-user.page';

@Component({
  selector: 'app-global-settings',
  templateUrl: './global-settings.page.html',
  styleUrls: ['./global-settings.page.scss'],
})
export class GlobalSettingsPage implements OnInit {
  CurrentUser: any;
  option: number;
  departments: any[] = [];
  users: any[] = [];
  servicePhones: any[] = [];
  hierarchies: any[] = [];
  permissions: any;

  constructor(
    private menuController: MenuController,
    private navController: NavController,
    private configService: ConfigService,
    private userService: UserService,
    private modalController: ModalController,
    private toastController: ToastController,
  ) { }

  ngOnInit() {
    this.menuController.enable(false);
    this.CurrentUser = JSON.parse(sessionStorage.getItem('user'));
    if (this.CurrentUser == null) {
      this.navController.navigateRoot('/login');
    } else {
      this.menuController.enable(true);
      console.log(this.CurrentUser)
      this.configService.getDepartments().subscribe((data: any) => {
        this.departments = data;
      });
      this.userService.getUsers().subscribe((data: any) => {
        for (let user of data) {
          user.hierarchy = JSON.parse(user.hierarchy);
          this.users.push(user);
        }
        console.log(this.users)
      });
      this.configService.getServicePhones().subscribe((data: any) => {
        this.servicePhones = data;
      });
      this.configService.getHierarchies().subscribe((data: any) => {
        this.hierarchies = data;
      });
    }
  }


  segmentChange(event) {
    if (event.detail.value == 1) {

    }

    if (event.detail.value == 2) {

    }
  }

  openMenu() {
    this.menuController.open();
  }

  async addUser() {
    const modal = await this.modalController.create({
      component: RegisterUserPage,
    });

    await modal.present();

    const data: any = await modal.onDidDismiss();


    if (data.data.response == 'success') {
      this.doRefresh();
      this.presentToast('Usuario añadido exitosamente');
    }
  }

  async addDepartment() {
    const modal = await this.modalController.create({
      component: RegisterDepartmentPage,
    });

    await modal.present();


    const data: any = await modal.onDidDismiss();


    if (data.data.response == 'success') {
      this.doRefresh();
      this.presentToast('Departamento añadido exitosamente');
    }
  }

  async addServicePhone() {
    const modal = await this.modalController.create({
      component: RegisterServicePhonePage,
    });

    await modal.present();

    const data: any = await modal.onDidDismiss();


    if (data.data.response == 'success') {
      this.doRefresh();
      this.presentToast('Teléfono de servicio añadido exitosamente');
    }
  }

  async addHierarchy() {
    const modal = await this.modalController.create({
      component: RegisterHierarchyPage,
    });

    await modal.present();

    const data: any = await modal.onDidDismiss();


    if (data.data.response == 'success') {
      this.doRefresh();
      this.presentToast('Jerarquía añadida exitosamente');
    }
  }

  async updateServicePhone(id, name, number) {
    const modal = await this.modalController.create({
      component: UpdateServicePhonePage,
      componentProps: {
        id: id,
        name: name,
        number: number,
      }
    });

    await modal.present();

    const data: any = await modal.onDidDismiss();


    if (data.data.response == 'success') {
      this.doRefresh();
      this.presentToast('Teléfono de servicio actualizado exitosamente');
    }
  }

  async updateHierarchy(id, name, level) {
    const modal = await this.modalController.create({
      component: UpdateHierarchyPage,
      componentProps: {
        id: id,
        name: name,
        level: level,
      }
    });

    await modal.present();

    const data: any = await modal.onDidDismiss();


    if (data.data.response == 'success') {
      this.doRefresh();
      this.presentToast('Jerarquía actualizada exitosamente');
    }
  }

  async updateDepartment(id, name, color, icon, info) {
    const modal = await this.modalController.create({
      component: UpdateDepartmentPage,
      componentProps: {
        id: id,
        name: name,
        color: color,
        icon: icon,
        info: info
      }
    });

    await modal.present();

    const data: any = await modal.onDidDismiss();


    if (data.data.response == 'success') {
      this.doRefresh();
      this.presentToast('Departamento actualizado exitosamente');
    }
  }

  async updateUser(id, name, lastname, phone, password, role, department) {
    const modal = await this.modalController.create({
      component: UpdateUserPage,
      componentProps: {
        id: id,
        name: name,
        lastname: lastname,
        phone: phone,
        password: password,
        role: role,
        department: department,
      }
    });

    await modal.present();

    const data: any = await modal.onDidDismiss();


    if (data.data.response == 'success') {
      this.doRefresh();
      this.presentToast('Usuario actualizado exitosamente');
    }
  }

  deleteServicePhone(id) {
    this.configService.deleteServicePhone(id).subscribe(response => {
      console.log(response)
      this.doRefresh();
    });
  }

  deleteHierarchy(id) {
    this.configService.deleteHierarchy(id).subscribe(response => {
      console.log(response)
      this.doRefresh();
    });
  }

  deleteDepartment(id) {
    this.configService.deleteDepartment(id).subscribe(response => {
      console.log(response)
      this.doRefresh();
    });
  }

  deleteUser(id) {
    this.userService.deleteUser(id).subscribe(response => {
      console.log(response)
      this.doRefresh();
    });
  }

  doRefresh() {
    this.departments = [];
    this.users = [];
    this.servicePhones = [];
    this.hierarchies = [];
    setTimeout(() => {
      this.configService.getDepartments().subscribe((data: any) => {
        this.departments = data;
      });
      this.userService.getUsers().subscribe((data: any) => {
        for (let user of data) {
          user.hierarchy = JSON.parse(user.hierarchy);
          this.users.push(user);
        }
      });
      this.configService.getServicePhones().subscribe((data: any) => {
        this.servicePhones = data;
      });
      this.configService.getHierarchies().subscribe((data: any) => {
        this.hierarchies = data;
      });
    }, 500);
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });

    await toast.present();
  }

}
