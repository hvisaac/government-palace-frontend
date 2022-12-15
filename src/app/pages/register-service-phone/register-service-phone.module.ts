import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterServicePhonePageRoutingModule } from './register-service-phone-routing.module';

import { RegisterServicePhonePage } from './register-service-phone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterServicePhonePageRoutingModule
  ],
  declarations: [RegisterServicePhonePage]
})
export class RegisterServicePhonePageModule {}
