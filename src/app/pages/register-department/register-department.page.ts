import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ConfigService } from '../../services/config.service';
import iro from '@jaames/iro';

@Component({
  selector: 'app-register-department',
  templateUrl: './register-department.page.html',
  styleUrls: ['./register-department.page.scss'],
})
export class RegisterDepartmentPage implements OnInit {

  @Input()
  name: string;

  @Input()
  color: string;

  @Input()
  icon: string;

  @Input()
  reports: string;
  
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

  addDepartment(name, color, icon, reports) {
    let department = {
      name: name,
      color: color,
      icon: icon,
      reports: reports
    }

    this.configService.addDepartment(department).subscribe(response => this.modalController.dismiss({response: 'success'}));
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
