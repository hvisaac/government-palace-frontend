import { Component, Input, OnInit } from '@angular/core';
import { PhotoInterface } from 'src/app/interfaces/photo-interface';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.page.html',
  styleUrls: ['./galery.page.scss'],
})
export class GaleryPage implements OnInit {

  @Input() photo: PhotoInterface;

  constructor(
    private ModalController: ModalController
  ) { }

  ngOnInit() {
  }

  dismiss(){
    this.ModalController.dismiss();
  }
}
