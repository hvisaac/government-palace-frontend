import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-update-user-type',
  templateUrl: './update-user-type.page.html',
  styleUrls: ['./update-user-type.page.scss'],
})
export class UpdateUserTypePage implements OnInit {

  @Input()
  id: string;

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
      id: this.id,
      name: name,
      canCreate: canCreate,
      canEdit: canEdit,
      canDelete: canDelete,
      superUser: superUser,
    }
    this.configService.updateUserType(ServicePhone).subscribe(response => this.modalController.dismiss({response: 'success'}));;
  }

  dismiss(){
    this.modalController.dismiss({response: 'exit'});
  }
}
