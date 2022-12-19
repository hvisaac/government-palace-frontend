import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-update-hierarchy',
  templateUrl: './update-hierarchy.page.html',
  styleUrls: ['./update-hierarchy.page.scss'],
})
export class UpdateHierarchyPage implements OnInit {

  @Input()
  id: string;

  @Input()
  name: string;

  @Input()
  level: number;

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

  updateHierarchy(name, level) {
    const hierarchy = {
      id: this.id,
      name: name,
      level: level
    }
    this.configService.updateHierarchy(hierarchy).subscribe(response => this.modalController.dismiss({response: 'success'}));;
  }

  dismiss(){
    this.modalController.dismiss({response: 'exit'});
  }


}
