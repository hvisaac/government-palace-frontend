import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-register-hierarchy',
  templateUrl: './register-hierarchy.page.html',
  styleUrls: ['./register-hierarchy.page.scss'],
})
export class RegisterHierarchyPage implements OnInit {

  
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

  addHierarchy(name, level) {
    const hierarchy = {
      name: name,
      level: level
    }
    this.configService.addHierarchy(hierarchy).subscribe(response => this.modalController.dismiss({response}));
  }

  dismiss(){
    this.modalController.dismiss({response: 'exit'});
  }

}
