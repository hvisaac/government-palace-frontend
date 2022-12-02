import { Component, Input, OnInit } from '@angular/core';
import { PhotoInterface } from 'src/app/interfaces/photo-interface';
import { ModalController } from '@ionic/angular';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.page.html',
  styleUrls: ['./galery.page.scss'],
})
export class GaleryPage implements OnInit {

  @Input() _idReport: string;
  photo: string;

  constructor(
    private ModalController: ModalController,
    private reportService: ReportService
  ) { }

  ngOnInit() {
    this.reportService.getReportById(this._idReport).subscribe((data: any) => {
      this.photo = data[0].photo;
    })
  }

  dismiss(){
    this.ModalController.dismiss();
  }
}
