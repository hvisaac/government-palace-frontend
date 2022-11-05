import { Component, Input, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.page.html',
  styleUrls: ['./register-user.page.scss'],
})
export class RegisterUserPage implements OnInit {

  @Input()
  phone: string;

  @Input()
  password: string;

  @Input()
  repassword: string;

  @Input()
  name: string;

  @Input()
  lastname: string;

  constructor(
    private AuthService: AuthService,
    private NavController: NavController,
    private MenuController: MenuController
  ) { }

  ngOnInit() {
    this.MenuController.enable(false);
  }

  SignUp
    (
      phone: string,
      password: string,
      repassword: string,
      name: string,
      lastname: string
    ) {
    this.AuthService.SignUp
      (
        phone,
        password,
        name,
        lastname
      )
      .subscribe((data: any) => {
        if (data.length > 0) {
          this.NavController.navigateRoot('/login');
        } else {
          console.log("user not found");
        }
      });
  }
}
