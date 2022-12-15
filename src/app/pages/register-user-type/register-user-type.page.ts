import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-register-user-type',
  templateUrl: './register-user-type.page.html',
  styleUrls: ['./register-user-type.page.scss'],
})
export class RegisterUserTypePage implements OnInit {

  @Input()
  name: string;

  @Input()
  canCreate: boolean = false;

  @Input()
  canEdit: boolean = false;

  @Input()
  canDelete: boolean = false;

  @Input()
  superUser: boolean = false;

  constructor(
    private modalController: ModalController,
    private configService: ConfigService
  ) { }

  ngOnInit() {
  }

  addUserType(name, canCreate, canEdit, canDelete, superUser) {
    const ServicePhone = {
      name: name,
      canCreate: canCreate,
      canEdit: canEdit,
      canDelete: canDelete,
      superUser: superUser,
    }
    this.configService.addUserType(ServicePhone).subscribe(response => this.modalController.dismiss({response}));;
  }

  dismiss(){
    this.modalController.dismiss({response: 'exit'});
  }
}
