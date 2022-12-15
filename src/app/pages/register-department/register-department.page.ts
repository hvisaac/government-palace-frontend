import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
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
  
  constructor(
    private modalController: ModalController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    let colorPicker = iro.ColorPicker('#colorPicker', {width:320,color:'#ffff'})

    colorPicker.on('color:change', (colorPicked) => {
      console.log(colorPicked)
      this.color = colorPicked.hexString
    })
  }

  addDepartment(name, color, icon) {

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
