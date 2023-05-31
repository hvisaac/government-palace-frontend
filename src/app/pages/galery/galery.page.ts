import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.page.html',
  styleUrls: ['./galery.page.scss'],
})
export class GaleryPage implements OnInit {

  @Input() _idReport: string;
  report: any;
  imageLoaded: boolean = false;

  constructor(
    private ModalController: ModalController,
    private reportService: ReportService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.reportService.getReportById(this._idReport).subscribe((data: any) => {
        this.report = data;
        if (this.report) {
          this.imageLoaded = true
        }
      })
    }, 1000);
  }

  dismiss(){
    this.ModalController.dismiss();
  }
}
