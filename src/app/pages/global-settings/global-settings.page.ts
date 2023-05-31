import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, NavController, ToastController } from '@ionic/angular';
import { ConfigService } from 'src/app/services/config.service';
import { LoadingService } from 'src/app/services/loading.service';
import { UserService } from 'src/app/services/user.service';
import { RegisterDepartmentPage } from '../register-department/register-department.page';
import { RegisterHierarchyPage } from '../register-hierarchy/register-hierarchy.page';
import { RegisterSecretariatPage } from '../register-secretariat/register-secretariat.page';
import { RegisterServicePhonePage } from '../register-service-phone/register-service-phone.page';
import { RegisterUserPage } from '../register-user/register-user.page';
import { UpdateDepartmentPage } from '../update-department/update-department.page';
import { UpdateHierarchyPage } from '../update-hierarchy/update-hierarchy.page';
import { UpdateSecretariatPage } from '../update-secretariat/update-secretariat.page';
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
  otherUsers: any[] = [];
  superUsers: any[] = [];
  servicePhones: any[] = [];
  hierarchies: any[] = [];
  secretariats: any[] = [];
  permissions: any;
  firstSegmentLoaded: boolean = false;
  secondSegmentLoaded: boolean = false;
  thirdSegmentLoaded: boolean = false;
  fourdSegmentLoaded: boolean = false;

  constructor(
    private menuController: MenuController,
    private navController: NavController,
    private configService: ConfigService,
    private userService: UserService,
    private modalController: ModalController,
    private toastController: ToastController,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.menuController.enable(false);
    this.CurrentUser = JSON.parse(sessionStorage.getItem('user'));
    if (this.CurrentUser == null) {
      this.navController.navigateRoot('/login');
    } else {
      this.menuController.enable(true);
      this.configService.getSecretariats().subscribe((data: any) => {
        for (let secretariat of data) {
          for (let secretary of secretariat.secretary) {
            secretary.hierarchy = JSON.parse(secretary.hierarchy)[0]
          }
          if (this.CurrentUser.hierarchy.level > 0) {
            for (let userSecretariat of this.CurrentUser.departments) {
              if (userSecretariat == secretariat._id) {
                this.secretariats.push(secretariat);
              }
            }
          } else {
            this.secretariats = data;
          }
        }
      });
      this.configService.getDepartments().subscribe((data: any) => {
        if (this.CurrentUser.hierarchy.level > 0) {
          for (let department of data) {
            for (let userDepartment of this.CurrentUser.departments) {
              if (userDepartment == department._id) {
                this.departments.push(department);
              }
            }
          }
        } else {
          this.departments = data;
        }
      });
      this.userService.getUsers().subscribe((data: any) => {
        for (let user of data) {
          user.hierarchy = JSON.parse(user.hierarchy);
          if (user.hierarchy.level == 1) {
            this.superUsers.push(user);
          } else if(user.hierarchy.level > 1 && !user.secretariat && !user.department) {
            this.otherUsers.push(user)
          }
          else{
            this.users.push(user);
          }
        }
        this.users.sort((n1, n2) => {
          if (n1.hierarchy.level > n2.hierarchy.level) {
            return 1;
          }

          if (n1.hierarchy.level < n2.hierarchy.level) {
            return -1;
          }

          return 0;
        });
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
      this.firstSegmentLoaded = false;
      setTimeout(() => {
        this.firstSegmentLoaded = true;
      }, 1000);
    }

    if (event.detail.value == 2) {
      this.secondSegmentLoaded = false;
      setTimeout(() => {
        this.secondSegmentLoaded = true;
      }, 1000);
    }

    if (event.detail.value == 3) {
      this.thirdSegmentLoaded = false;
      setTimeout(() => {
        this.thirdSegmentLoaded = true;
      }, 1000);
    }

    if (event.detail.value == 4) {
      this.fourdSegmentLoaded = false;
      setTimeout(() => {
        this.fourdSegmentLoaded = true;
      }, 1000);
    }
  }

  openMenu() {
    this.menuController.open();
  }

  ringUser(phone) {
    window.open(`tel:${phone}`);
  }

  async addUser() {

    this.loadingService.showLoading();
    const modal = await this.modalController.create({
      component: RegisterUserPage,
    });

    await modal.present().then(() => this.loadingService.dismissLoading());

    const data: any = await modal.onDidDismiss();


    if (data.data.response == 'success') {
      this.doRefresh();
      this.presentToast('Usuario añadido exitosamente');
    }
  }

  async addDepartment(secretariat) {

    this.loadingService.showLoading();
    const modal = await this.modalController.create({
      component: RegisterDepartmentPage,
      componentProps: {
        secretariat: secretariat
      }
    });

    await modal.present().then(() => this.loadingService.dismissLoading());;


    const data: any = await modal.onDidDismiss();


    if (data.data.response == 'success') {
      this.doRefresh();
      this.presentToast('Departamento añadido exitosamente');
    }
  }

  async addServicePhone() {

    this.loadingService.showLoading();
    const modal = await this.modalController.create({
      component: RegisterServicePhonePage,
    });

    await modal.present().then(() => this.loadingService.dismissLoading());;

    const data: any = await modal.onDidDismiss();


    if (data.data.response == 'success') {
      this.doRefresh();
      this.presentToast('Teléfono de servicio añadido exitosamente');
    }
  }

  async addSecretariat() {

    this.loadingService.showLoading();
    const modal = await this.modalController.create({
      component: RegisterSecretariatPage,
    });

    await modal.present().then(() => this.loadingService.dismissLoading());;

    const data: any = await modal.onDidDismiss();


    if (data.data.response == 'success') {
      this.doRefresh();
      this.presentToast('Secretaríá añadida exitosamente');
    }
  }

  async addHierarchy() {

    this.loadingService.showLoading();
    const modal = await this.modalController.create({
      component: RegisterHierarchyPage,
    });

    await modal.present().then(() => this.loadingService.dismissLoading());;

    const data: any = await modal.onDidDismiss();


    if (data.data.response == 'success') {
      this.doRefresh();
      this.presentToast('Jerarquía añadida exitosamente');
    }
  }

  async updateServicePhone(id, name, number) {

    this.loadingService.showLoading();
    const modal = await this.modalController.create({
      component: UpdateServicePhonePage,
      componentProps: {
        id: id,
        name: name,
        number: number,
      }
    });

    await modal.present().then(() => this.loadingService.dismissLoading());;

    const data: any = await modal.onDidDismiss();


    if (data.data.response == 'success') {
      this.doRefresh();
      this.presentToast('Teléfono de servicio actualizado exitosamente');
    }
  }

  async updateSecretariat(id, name) {

    this.loadingService.showLoading();
    const modal = await this.modalController.create({
      component: UpdateSecretariatPage,
      componentProps: {
        id: id,
        name: name,
      }
    });

    await modal.present().then(() => this.loadingService.dismissLoading());;

    const data: any = await modal.onDidDismiss();


    if (data.data.response == 'success') {
      this.doRefresh();
      this.presentToast('Secretaría actualizada exitosamente');
    }
  }

  async updateHierarchy(id, name, level) {

    this.loadingService.showLoading();
    const modal = await this.modalController.create({
      component: UpdateHierarchyPage,
      componentProps: {
        id: id,
        name: name,
        level: level,
      }
    });

    await modal.present().then(() => this.loadingService.dismissLoading());;

    const data: any = await modal.onDidDismiss();


    if (data.data.response == 'success') {
      this.doRefresh();
      this.presentToast('Jerarquía actualizada exitosamente');
    }
  }

  async updateDepartment(id, name, color, icon, info) {

    this.loadingService.showLoading();
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

    await modal.present().then(() => this.loadingService.dismissLoading());;

    const data: any = await modal.onDidDismiss();


    if (data.data.response == 'success') {
      this.doRefresh();
      this.presentToast('Departamento actualizado exitosamente');
    }
  }

  async updateUser(user) {

    this.loadingService.showLoading();
    const modal = await this.modalController.create({
      component: UpdateUserPage,
      componentProps: {
        id: user._id,
        name: user.name,
        lastname: user.lastname,
        phone: user.phone,
        password: user.password,
        secretariat: user.secretariat,
        hierarchy: user.hierarchy,
        department: user.department,
        transfer: user.permissions.transfer,
        waitingStatus: user.permissions.waitingStatus,
        workingStatus: user.permissions.workingStatus,
        finishStatus: user.permissions.finishStatus
      }
    });

    await modal.present().then(() => this.loadingService.dismissLoading());

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

  logicDownUser(id, available) {
    if (available) {
      this.userService.enableUser(id).subscribe(response => {
        console.log(response)
        this.doRefresh();
      });;
    } else {
      this.userService.disableUser(id).subscribe(response => {
        console.log(response)
        this.doRefresh();
      });;
    }
  }

  logicDownSecretariat(id, available) {
    this.configService.switchSecretariat(id, available).subscribe(response => {
      window.location.reload();
      //this.doRefresh();
    });
  }

  logicDownDepartment(id, available) {
    if (available) {
      this.configService.enableDepartment(id).subscribe(response => {
        console.log(response)
        this.doRefresh();
      });;
    } else {
      this.configService.disableDepartment(id).subscribe(response => {
        console.log(response)
        this.doRefresh();
      });;
    }
  }

  logicDownHierarchy(id, available) {
    if (available) {
      this.configService.enableHierarchy(id).subscribe(response => {
        console.log(response)
        this.doRefresh();
      });;
    } else {
      this.configService.disableHierarchy(id).subscribe(response => {
        console.log(response)
        this.doRefresh();
      });;
    }
  }

  logicDownServicePhone(id, available) {
    if (available) {
      this.configService.enableServicePhone(id).subscribe(response => {
        console.log(response)
        this.doRefresh();
      });;
    } else {
      this.configService.disableServicePhone(id).subscribe(response => {
        console.log(response)
        this.doRefresh();
      });;
    }
  }

  doRefresh() {
    this.departments = [];
    this.users = [];
    this.servicePhones = [];
    this.hierarchies = [];
    this.secretariats = [];
    this.superUsers = [];
    this.otherUsers = [];

    setTimeout(() => {
      this.configService.getSecretariats().subscribe((data: any) => {
        if (this.CurrentUser.hierarchy.level > 0) {
          for (let secretariat of data) {
            for (let userSecretariat of this.CurrentUser.departments) {
              if (userSecretariat == secretariat._id) {
                this.secretariats.push(secretariat);
              }
            }
          }
        } else {
          this.secretariats = data;
        }
      });
      this.configService.getDepartments().subscribe((data: any) => {
        if (this.CurrentUser.hierarchy.level > 0) {
          for (let department of data) {
            for (let userDepartment of this.CurrentUser.departments) {
              if (userDepartment == department._id) {
                this.departments.push(department);
              }
            }
          }
        } else {
          this.departments = data;
        }
      });
      this.userService.getUsers().subscribe((data: any) => {
        for (let user of data) {
          user.hierarchy = JSON.parse(user.hierarchy);
          if (user.hierarchy.level == 1) {
            this.superUsers.push(user);
          } else if(user.hierarchy.level > 1 && !user.secretariat && !user.department) {
            this.otherUsers.push(user);
          }
          else{
            this.users.push(user);
          }
        }
        this.users.sort((n1, n2) => {
          if (n1.hierarchy.level > n2.hierarchy.level) {
            return 1;
          }

          if (n1.hierarchy.level < n2.hierarchy.level) {
            return -1;
          }

          return 0;
        });
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
