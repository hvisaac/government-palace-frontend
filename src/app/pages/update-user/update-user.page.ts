import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonSelect, ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ConfigService } from 'src/app/services/config.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.page.html',
  styleUrls: ['./update-user.page.scss'],
})
export class UpdateUserPage implements OnInit {

  secretariats: any[] = [];
  departments: any[] = [];
  hierarchies: any[] = [];
  CurrentUser: any;

  @Input()
  id: string;

  @Input()
  phone: string;

  @Input()
  name: string;

  @Input()
  lastname: string;

  @Input()
  department: string

  @Input()
  secretariat: string

  @Input()
  hierarchy: any;

  @Input()
  userHierarchy: any;

  @Input()
  userDepartment: string;

  @Input()
  userSecretariat: string;

  @Input()
  roleSelect: string

  @Input()
  transfer: boolean;

  @Input()
  waitingStatus: boolean;

  @Input()
  workingStatus: boolean

  @Input()
  finishStatus: boolean

  @Input()
  password: string;

  @ViewChild('test') test: IonSelect

  constructor(
    private userService: UserService,
    private configService: ConfigService,
    private modalController: ModalController,
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

  ngAfterViewInit() {
    setTimeout(() => {
      this.userHierarchy = this.hierarchy;
      this.userDepartment = this.department;
      this.userSecretariat = this.secretariat;
    }, 2000);
  }

  compareObjects(o1: any, o2: any): boolean {
    return o1._id === o2._id;//Compare by id
  }

  clearData(event) {
    console.log(event.detail.value)
    if (event.detail.value.level == 1) {
      this.userSecretariat = '';
      this.userDepartment = '';
    }
    if (event.detail.value.level == 2) {
      this.userDepartment = '';
    }
    if (event.detail.value.level > 2) {
      this.userSecretariat = '';
    }

  }

  updateUser() {
    const user = {
      id: this.id,
      phone: this.phone,
      password: this.password,
      name: this.name,
      lastname: this.lastname,
      secretariat: this.userSecretariat,
      department: this.userDepartment,
      hierarchy: this.userHierarchy._id,
      permissions: {
        waitingStatus: this.waitingStatus,
        workingStatus: this.workingStatus,
        finishStatus: this.finishStatus,
        transfer: this.transfer,
      }
    }

    this.userService.updateUser(user).subscribe(response => this.modalController.dismiss({ response: 'success' }));
  }

  dismiss() {
    this.modalController.dismiss({ response: 'exit' });
  }

}
