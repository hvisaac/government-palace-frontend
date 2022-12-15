import { Component, Input, OnInit } from '@angular/core';
import { MenuController, ModalController, NavController, ToastController } from '@ionic/angular';
import { UserInterface } from 'src/app/interfaces/user-interface';
import { AuthService } from 'src/app/services/auth.service';
import { ConfigService } from 'src/app/services/config.service';
import { UserService } from 'src/app/services/user.service';
import { RegisterDepartmentPage } from '../register-department/register-department.page';
import { RegisterServicePhonePage } from '../register-service-phone/register-service-phone.page';
import { RegisterUserTypePage } from '../register-user-type/register-user-type.page';
import { RegisterUserPage } from '../register-user/register-user.page';
import { UpdateDepartmentPage } from '../update-department/update-department.page';
import { UpdateServicePhonePage } from '../update-service-phone/update-service-phone.page';
import { UpdateUserTypePage } from '../update-user-type/update-user-type.page';
import { UpdateUserPage } from '../update-user/update-user.page';

@Component({
  selector: 'app-global-settings',
  templateUrl: './global-settings.page.html',
  styleUrls: ['./global-settings.page.scss'],
})
export class GlobalSettingsPage implements OnInit {
  CurrentUser: UserInterface;
  option: number;
  departments: any[];
  users: any[];
  userTypes: any[];
  servicePhones: any[];
  permissions: any;

  constructor(
    private menuController: MenuController,
    private navController: NavController,
    private AuthService: AuthService,
    private configService: ConfigService,
    private userService: UserService,
    private modalController: ModalController,
    private toastController: ToastController,
  ) { }

  ngOnInit() {
    this.menuController.enable(false);
    this.CurrentUser = JSON.parse(sessionStorage.getItem('user'));
    console.log(this.CurrentUser);
    if (this.CurrentUser == null) {
      this.navController.navigateRoot('/login');
    } else {
      this.configService.getUserType(this.CurrentUser[0].role).subscribe((role) => {
        console.log(role)
        this.permissions = role[0];
        console.log(this.permissions)

      });
      this.menuController.enable(true);
      this.configService.getDepartments().subscribe((data: any) => {
        this.departments = data;
      });
      this.userService.getUsers().subscribe((data: any) => {
        console.log(data)
        this.users = data;
      });
      this.configService.getUserTypes().subscribe((data: any) => {
        this.userTypes = data;
      });
      this.configService.getServicePhones().subscribe((data: any) => {
        this.servicePhones = data;
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

    console.log(data.data.response);

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

    
  }

  async addUserType() {
    const modal = await this.modalController.create({
      component: RegisterUserTypePage,
    });

    await modal.present();

    const data: any = await modal.onDidDismiss();

    console.log(data.data.response);

    if (data.data.response == 'success') {
      this.doRefresh();
      this.presentToast('Rol de usuario añadido exitosamente');
    }

  }

  async addServicePhone() {
    const modal = await this.modalController.create({
      component: RegisterServicePhonePage,
    });

    await modal.present();

    const data: any = await modal.onDidDismiss();

    console.log(data.data.response);

    if (data.data.response == 'success') {
      this.doRefresh();
      this.presentToast('Teléfono de servicio añadido exitosamente');
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

    console.log(data.data.response);

    if (data.data.response == 'success') {
      this.doRefresh();
      this.presentToast('Teléfono de servicio actualizado exitosamente');
    }
  }

  async updateDepartment() {
    const modal = await this.modalController.create({
      component: UpdateDepartmentPage,
    });

    await modal.present();

    const data: any = await modal.onDidDismiss();

    console.log(data.data.response);

    if (data.data.response == 'success') {
      this.doRefresh();
      this.presentToast('Departamento actualizado exitosamente');
    }
  }

  async updateUserType(id, name, canCreate, canEdit, canDelete, superUser) {
    const modal = await this.modalController.create({
      component: UpdateUserTypePage,
      componentProps: {
        id: id,
        name: name,
        canCreate: canCreate,
        canEdit: canEdit,
        canDelete: canDelete,
        superUser: superUser
      }
    });

    await modal.present();

    const data: any = await modal.onDidDismiss();

    console.log(data.data.response);

    if (data.data.response == 'success') {
      this.doRefresh();
      this.presentToast('Teléfono de servicio actualizado exitosamente');
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

    console.log(data.data.response);

    if (data.data.response == 'success') {
      this.doRefresh();
      this.presentToast('Usuario actualizado exitosamente');
    }
  }

  deleteServicePhone(id){
    this.configService.deleteServicePhone(id).subscribe(Response => console.log(Response));
    this.doRefresh();
  }

  deleteDepartment(id){
    this.configService.deleteDepartment(id).subscribe(Response => console.log(Response));
    this.doRefresh();
  }

  deleteUserType(id){
    this.configService.deleteUserType(id).subscribe(Response => console.log(Response));
    this.doRefresh();
  }

  deleteUser(id){
    this.userService.deleteUser(id).subscribe(Response => console.log(Response));
    this.doRefresh();
  }

  doRefresh() {
    this.departments = [];
    this.users = [];
    this.userTypes = [];
    this.servicePhones = [];
    setTimeout(() => {
      this.configService.getDepartments().subscribe((data: any) => {
        this.departments = data;
      });
      this.userService.getUsers().subscribe((data: any) => {
        this.users = data;
      });
      this.configService.getUserTypes().subscribe((data: any) => {
        this.userTypes = data;
      });
      this.configService.getServicePhones().subscribe((data: any) => {
        this.servicePhones = data;
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
