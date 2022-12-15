import { Component, Input, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { ConfigService } from 'src/app/services/config.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @Input()
  phone: string;

  @Input()
  password: string;

  constructor
    (
      private AuthService: AuthService,
      private NavController: NavController,
      private MenuController: MenuController,
      private configService: ConfigService,
    ) { }

  ngOnInit() {
    let CurrentUser = JSON.parse(sessionStorage.getItem('user'));
    console.log(CurrentUser);
    if (CurrentUser != null) {
      this.NavController.navigateRoot('/home');
    } else {
      sessionStorage.clear();
    }
    this.MenuController.enable(false);
  }

  async SignIn(phone: string, password: string) {
    this.AuthService.SignIn(phone, password).subscribe((data: any) => {
      if (data.length > 0) {
        sessionStorage.setItem('user', JSON.stringify(data));
        this.configService.getUserType(data[0].role).subscribe((role) => {
          sessionStorage.setItem('permissions', JSON.stringify(role));
        });
        this.NavController.navigateRoot('/home');
      } else {
        console.log("user not found");
      }
    });
  }

}
