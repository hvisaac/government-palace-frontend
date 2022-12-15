import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateServicePhonePageRoutingModule } from './update-service-phone-routing.module';

import { UpdateServicePhonePage } from './update-service-phone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateServicePhonePageRoutingModule
  ],
  declarations: [UpdateServicePhonePage]
})
export class UpdateServicePhonePageModule {}
