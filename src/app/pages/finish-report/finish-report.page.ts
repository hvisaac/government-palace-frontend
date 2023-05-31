import { Component, Input, OnInit } from '@angular/core';
import { AlertController, IonicSafeString, LoadingController, ModalController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { LoadingService } from 'src/app/services/loading.service';
import { PhotoService } from 'src/app/services/photo.service';
import { ReportService } from 'src/app/services/report.service';
import { environment } from 'src/environments/environment';

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
  phones: string[]

  @Input()
  description: string;

  @Input()
  photo: any; 

  @Input()
  finishDescription: string

  @Input()
  createdAt: Date

  photoPreview: string
  
  constructor(
    private photoService: PhotoService,
    private modalController: ModalController,
    private reportService: ReportService, 
    protected firebaseService: FirebaseService,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.photoPreview = "assets/app-icons/not-photo.png"
  }

  async finishReport(finishDescription, photo) {
    
    this.loadingService.showLoading()
    const date = new Date(this.createdAt)
    const path = `${environment.firebasePath}/${date.getFullYear()}/${date.getMonth() + 1}/${this.folio}`
    photo = await this.firebaseService.uploadImage(path, photo, "resolved");
    this.reportService.finishReport(this.id, photo, finishDescription, this.phones).subscribe((response: any) => {
      this.modalController.dismiss({
        response: 'success',
        folio: response.folio
      })
      this.loadingService.dismissLoading()
    });
  }

  async shootPhoto() {
    this.photo = await this.photoService.selectImage();
    this.photoPreview = await this.photoService.convertBlobToBase64(this.photo) as string
  }


  dismiss(){
    this.modalController.dismiss();
  }
}
