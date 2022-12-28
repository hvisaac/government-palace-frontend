import { Component, Input, OnInit } from '@angular/core';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { UserInterface } from 'src/app/interfaces/user-interface';
import { ConfigService } from 'src/app/services/config.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  CurrentUser: UserInterface;

  @Input()
  id: string;

  @Input()
  username: string;

  @Input()
  password: string;

  @Input()
  hierarchy: number;

  constructor(
    private menuController: MenuController,
    private navController: NavController,
    private userService: UserService,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.CurrentUser = JSON.parse(sessionStorage.getItem('user'));
  }

  openMenu() {
    this.menuController.open();
  }

  dismiss() {
    this.modalController.dismiss();
  }

  changeUserAndPassword(name, password){
    let user = {
      id: this.id,
      name,
      password
    }
    this.userService.updateUser(user).subscribe(data => {
      if(data) {
        this.logout()
      }
    });
  }

  logout() {
    sessionStorage.clear();
    window.location.href = '/login';
  }
}
