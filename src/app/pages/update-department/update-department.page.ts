import { Component, Input, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import iro from '@jaames/iro';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.page.html',
  styleUrls: ['./update-department.page.scss'],
})
export class UpdateDepartmentPage implements OnInit {

  @Input()
  id: string;

  @Input()
  name: string;

  @Input()
  color: string;

  @Input()
  icon: string;

  @Input()
  info: string;
  
  constructor(
    private modalController: ModalController,
    private alertController: AlertController,
    private configService: ConfigService
  ) { }

  ngOnInit() {
    let colorPicker = iro.ColorPicker('#colorPicker', {width:320,color:'#ffff'})

    colorPicker.on('color:change', (colorPicked) => {
      this.color = colorPicked.hexString
    })
  }

  updateDepartment(name, color, icon, info) {
    let department = {
      id: this.id,
      name: name,
      color: color,
      icon: icon,
      info: info
    }

    this.configService.updateDepartment(department).subscribe(response => this.modalController.dismiss({response: 'success'}));
  }

  dismiss(){
    this.modalController.dismiss({response: 'exit'});
  }

  async selectColor() {
    
    const alert = await this.alertController.create({
      header: 'Selecciona un color',
      message: 'hello',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
