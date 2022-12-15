import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-register-service-phone',
  templateUrl: './register-service-phone.page.html',
  styleUrls: ['./register-service-phone.page.scss'],
})
export class RegisterServicePhonePage implements OnInit {

  @Input()
  name: string;

  @Input()
  number: string;

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

  addServicePhone(name, number) {
    const ServicePhone = {
      name: name,
      phone: number
    }
    this.configService.addServicePhones(ServicePhone).subscribe(response => this.modalController.dismiss({response}));;
  }

  dismiss(){
    this.modalController.dismiss({response: 'exit'});
  }

}

