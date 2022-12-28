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
  hierarchies: any[];

  @Input()
  phone: string;

  @Input()
  password: string;

  @Input()
  name: string;

  @Input()
  lastname: string;

  @Input()
  userDepartments: string[];

  @Input()
  role: string;

  @Input()
  hierarchy: string;

  @Input()
  waitingStatus: boolean;

  @Input()
  workingStatus: boolean
  
  @Input()
  finishStatus: boolean

  constructor(
    private AuthService: AuthService,
    private configService: ConfigService,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.configService.getDepartments().subscribe((data: any) => {
      this.departments = data;
    });
    this.configService.getHierarchies().subscribe((data: any) => {
      this.hierarchies = data;
    });
  }

  SignUp
    (
      phone: string,
      password: string,
      name: string,
      lastname: string,
      departments: String[],
      waitingStatus: boolean,
      workingStatus: boolean,
      finishStatus: boolean,
      hierarchy: string,
    ) {

    let request = {
      phone: phone,
      password: password,
      name: name,
      lastname: lastname,
      urlPhoto: '',
      departments: departments,
      permissions: {
        waitingStatus: waitingStatus,
        workingStatus: workingStatus,
        finishStatus: finishStatus,
      },
      hierarchy: hierarchy,
    }
    console.log(request)
    this.AuthService.SignUp(request).subscribe(response => this.modalController.dismiss({ response: 'success' }));
  }

  dismiss() {
    this.modalController.dismiss({ response: 'exit' });
  }

}
