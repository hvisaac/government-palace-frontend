import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-water',
  templateUrl: './water.page.html',
  styleUrls: ['./water.page.scss'],
})
export class WaterPage implements OnInit {

  constructor(
    private ModalController: ModalController
  ) { }

  ngOnInit() {
  }

  dismiss(){
    this.ModalController.dismiss();
  }

}
