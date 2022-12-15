import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PhotoService } from 'src/app/services/photo.service';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-finish-report',
  templateUrl: './finish-report.page.html',
  styleUrls: ['./finish-report.page.scss'],
})
export class FinishReportPage implements OnInit {

  @Input()
  id: string

  @Input()
  folio: string

  @Input()
  icon: string

  @Input()
  description: string;

  @Input()
  photo: string;
  
  constructor(
    private photoService: PhotoService,
    private modalController: ModalController,
    private reportService: ReportService
  ) { }

  ngOnInit() {
  }

  finishReport(description, photo) {
    this.reportService.finishReport(this.id, photo, description).subscribe((response: any) => {
      this.modalController.dismiss({
        response: 'success',
        folio: response.folio
      })
    });
  }

  async shootPhoto() {
    this.photo = await this.photoService.selectImage();
  }

  dismiss(){
    this.modalController.dismiss();
  }
}
