import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ConfigService } from 'src/app/services/config.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.page.html',
  styleUrls: ['./register-user.page.scss'],
})
export class RegisterUserPage implements OnInit {

  secretariats: any[] = [];
  departments: any[] = [];
  hierarchies: any[] = [];
  CurrentUser: any;

  @Input()
  phone: string;

  @Input()
  password: string;

  @Input()
  name: string;

  @Input()
  lastname: string;

  @Input()
  userDepartment: string[];

  @Input()
  userSecretariat: string;

  @Input()
  role: string;

  @Input()
  hierarchy: any;

  @Input()
  waitingStatus: boolean;

  @Input()
  workingStatus: boolean
  
  @Input()
  finishStatus: boolean

  @Input()
  transfer: boolean

  constructor(
    private AuthService: AuthService,
    private configService: ConfigService,
    private modalController: ModalController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.CurrentUser = JSON.parse(sessionStorage.getItem('user'));
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
    this.configService.getHierarchies().subscribe((data: any) => {
      this.hierarchies = data;
    });
    this.configService.getSecretariats().subscribe((data: any) => {
      this.secretariats = data;
    });
  }

  SignUp() {

    let request = {
      phone: this.phone,
      password: this.password,
      name: this.name,
      lastname: this.lastname,
      urlPhoto: '',
      department: this.userDepartment,
      secretariat: this.userSecretariat,
      permissions: {
        tranfer: this.transfer,
        waitingStatus: this.waitingStatus,
        workingStatus: this.workingStatus,
        finishStatus: this.finishStatus,
      },
      hierarchy: this.hierarchy._id,
    }
    this.AuthService.SignUp(request).subscribe(() => {
      this.modalController.dismiss({ response: 'success' })
    }, (err) => {
      if (err.status == 400) {
        this.presentAlert('El número de teléfono que intentas ingresar ya existe');
      }
    });
  }

  async presentAlert(message) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  dismiss() {
    this.modalController.dismiss({ response: 'exit' });
  }

}
