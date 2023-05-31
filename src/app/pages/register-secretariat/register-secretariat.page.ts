import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-register-secretariat',
  templateUrl: './register-secretariat.page.html',
  styleUrls: ['./register-secretariat.page.scss'],
})
export class RegisterSecretariatPage implements OnInit {

  @Input()
  name: string;

  /*@Input()
  color: string;

  @Input()
  icon: string;*/

  constructor(
    private modalController: ModalController,
    private configService: ConfigService,
  ) { }

  ngOnInit() {
  }

  /*addServicePhone(name, number, color, icon) {

  }*/

  addSecretariat() {
    const secretariat = {
      name: this.name,
    }
    this.configService.addSecretariat(secretariat).subscribe(response => this.modalController.dismiss({response}));;
  }

  dismiss(){
    this.modalController.dismiss({response: 'exit'});
  }

}
