import { Component, Input, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { ConfigService } from 'src/app/services/config.service';
import { LoadingService } from 'src/app/services/loading.service';
import { environment } from 'src/environments/environment';
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
      private loadingService: LoadingService
    ) { }

  ngOnInit() {
    let CurrentUser = JSON.parse(sessionStorage.getItem('user'));
    if (CurrentUser != null) {
      this.NavController.navigateRoot('/home');
    } else {
      sessionStorage.clear();
    }
    this.MenuController.enable(false);
  }

  async SignIn(phone: string, password: string) {
    this.AuthService.SignIn(phone, password).subscribe(async (data: any) => {
      await this.loadingService.showLoading();
      if (data != null) {
        data[0].hierarchy = JSON.parse(data[0].hierarchy);
        sessionStorage.setItem('user', JSON.stringify(data[0]));
        window.location.href = "/home";
      } else {
        this.loadingService.dismissLoading();
        console.log("user not found");
      }
    });
  }

}
