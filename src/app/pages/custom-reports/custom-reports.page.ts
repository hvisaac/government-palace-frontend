import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';
import { MapPage } from '../map/map.page';
import { GaleryPage } from '../galery/galery.page';

@Component({
  selector: 'app-custom-reports',
  templateUrl: './custom-reports.page.html',
  styleUrls: ['./custom-reports.page.scss'],
})
export class CustomReportsPage implements OnInit {
  @Input() reports: any[];

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {
  }

  async openMap() {
    let coordinates = await Geolocation.getCurrentPosition();
    const modal = await this.modalController.create({
      component: MapPage,
      componentProps: {
        Latitude: coordinates.coords.latitude,
        Longitude: coordinates.coords.longitude,
      }
    });

    await modal.present();

  }

  async openPhoto(_id: string) {
    const modal = await this.modalController.create({
      component: GaleryPage,
      componentProps: {
        _idReport: _id,
      }
    });

    await modal.present();

  }

  dismiss(){
    this.modalController.dismiss();
  }
}
