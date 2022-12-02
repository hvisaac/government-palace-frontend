import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  @Input() Latitude;
  @Input() Longitude;
  @Input() idReport;

  constructor(
    public MapService: MapService,
    private ModalController: ModalController,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.showMap();
    }, 3000);
  }

  showMap() {
    this.MapService.initOSMWithDescription(this.Latitude, this.Longitude, 'map');
  }

  dismiss() {
    this.ModalController.dismiss();
  }

}
