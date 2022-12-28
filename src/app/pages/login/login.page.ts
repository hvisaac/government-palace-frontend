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
  name: string;

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
    console.log('llega');
    let CurrentUser = JSON.parse(sessionStorage.getItem('user'));
    console.log(CurrentUser);
    if (CurrentUser != null) {
      this.NavController.navigateRoot('/home');
    } else {
      sessionStorage.clear();
    }
    this.MenuController.enable(false);
  }

  async SignIn(name: string, password: string) {
    this.AuthService.SignIn(name, password).subscribe((data: any) => {
      if (data.length > 0) {
        console.log(data)
        data[0].hierarchy = JSON.parse(data[0].hierarchy);
        sessionStorage.setItem('user', JSON.stringify(data[0]));
        this.NavController.navigateRoot('/home');
      } else {
        console.log("user not found");
      }
    });
  }

}
