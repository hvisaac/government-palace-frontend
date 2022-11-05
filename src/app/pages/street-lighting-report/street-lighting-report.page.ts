import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserInterface } from 'src/app/interfaces/user-interface';
import { MapService } from 'src/app/services/map.service';
import { PhotoService } from 'src/app/services/photo.service';
import { ReportService } from 'src/app/services/report.service';
import { GaleryPage } from '../galery/galery.page';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-street-lighting-report',
  templateUrl: './street-lighting-report.page.html',
  styleUrls: ['./street-lighting-report.page.scss'],
})
export class StreetLightingReportPage implements OnInit {

  constructor(
    public PhotoService: PhotoService,
    private ModalController: ModalController,
    public MapService: MapService,
    private ReportService: ReportService,
  ) { }

  @Input() CurrentUser: UserInterface;
  latitude: number = 0;
  longitude; number = 0;
  @Input() name: string = "";

  @Input() description: string = "";

  async ngOnInit() {
    let coordinates = await Geolocation.getCurrentPosition();
    this.latitude = coordinates.coords.latitude;
    this.longitude = coordinates.coords.longitude;
    console.log(this.CurrentUser);
  }

  ionViewDidEnter() {
    this.MapService.initOSM(this.latitude, this.longitude, 'map');
  }

  public shootPhoto() {
    this.PhotoService.selectImage();
  }

  async viewPhotos() {
    const modal = await this.ModalController.create({
      component: GaleryPage,
      componentProps: {
        photo: this.PhotoService.photo,
      }
    });

    modal.present();
  }

  saveReport() {
    let report = {
      iduser: this.CurrentUser[0]._id,
      name: this.name,
      department: "1",
      description: this.description,
      status: "0",
      photo: this.PhotoService.apiPhoto,
      geolocation: {
        latitude: this.MapService.markerLatitude,
        longitude: this.MapService.markerLongitude,
      }
    }
    console.log(report)

    this.ReportService.saveReport(report).subscribe(response => console.log(response));;
  }

  dismiss() {
    this.ModalController.dismiss();
  }

}
