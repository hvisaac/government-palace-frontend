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

  departments: any[];
  roles: any[];

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
  role: string

  @Input()
  departmentSelect: string

  @Input()
  roleSelect: string

  constructor(
    private userService: UserService,
    private configService: ConfigService,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    console.log('department -> ' + this.department)
    console.log('role -> ' + this.role)
    this.configService.getDepartments().subscribe((data: any) => {
      this.departments = data;
    });
    this.configService.getHierarchies().subscribe((data: any) => {
      this.roles = data;
    });
    setTimeout(() => {
      this.departmentSelect = this.department;
      this.roleSelect = this.role;
    }, 1000);

  }

  SignUp
    (
      phone: string,
      name: string,
      lastname: string,
      department: string,
      role: string
    ) {
    const user = {
      id: this.id,
      phone: phone,
      name: name,
      lastname: lastname,
      department: department,
      role: role,
    }

    this.userService.updateUser(user).subscribe(response => this.modalController.dismiss({ response: 'success' }));
  }

  dismiss() {
    this.modalController.dismiss({ response: 'exit' });
  }

}
