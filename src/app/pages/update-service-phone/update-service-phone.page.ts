import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-update-service-phone',
  templateUrl: './update-service-phone.page.html',
  styleUrls: ['./update-service-phone.page.scss'],
})
export class UpdateServicePhonePage implements OnInit {

  @Input()
  id: string;

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

  updateServicePhone(name, number) {
    const ServicePhone = {
      id: this.id,
      name: name,
      phone: number
    }
    this.configService.updateServicePhone(ServicePhone).subscribe(response => this.modalController.dismiss({
      response: 'success'
    }));;
  }

  dismiss(){
    this.modalController.dismiss({response: 'exit'});
  }
}
