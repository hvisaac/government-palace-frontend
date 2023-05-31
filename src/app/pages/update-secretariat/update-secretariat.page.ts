import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-update-secretariat',
  templateUrl: './update-secretariat.page.html',
  styleUrls: ['./update-secretariat.page.scss'],
})
export class UpdateSecretariatPage implements OnInit {

  @Input()
  id: string;

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

  updateSecretariat() {
    const secretariat = {
      id: this.id,
      name: this.name,
    }
    this.configService.updateSecretariat(secretariat).subscribe(response => this.modalController.dismiss({
      response: 'success'
    }));;
  }

  dismiss(){
    this.modalController.dismiss({response: 'exit'});
  }

}
