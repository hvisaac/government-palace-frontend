import { Component, Input, OnInit } from '@angular/core';
import { NavController, MenuController, ModalController } from '@ionic/angular';
import { ConfigService } from 'src/app/services/config.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.page.html',
  styleUrls: ['./register-user.page.scss'],
})
export class RegisterUserPage implements OnInit {
  departments: any[];
  roles: any[];

  @Input()
  phone: string;

  @Input()
  password: string;

  @Input()
  name: string;

  @Input()
  lastname: string;

  @Input()
  department: string

  @Input()
  role: string

  constructor(
    private AuthService: AuthService,
    private configService: ConfigService,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.configService.getDepartments().subscribe((data: any) => {
      this.departments = data;
      console.log(this.departments)
    });
    this.configService.getUserTypes().subscribe((data: any) => {
      this.roles = data;
      console.log(this.roles)
    });
  }

  SignUp
    (
      phone: string,
      password: string,
      name: string,
      lastname: string,
      department: string, 
      role: string
    ) {
    this.AuthService.SignUp
      (
        phone,
        password,
        name,
        lastname,
        department,
        role,
      )
      .subscribe(response => this.modalController.dismiss({response}));
  }

  dismiss(){
    this.modalController.dismiss({response: 'exit'});
  }

}
