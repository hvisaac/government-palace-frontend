import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateSecretariatPageRoutingModule } from './update-secretariat-routing.module';

import { UpdateSecretariatPage } from './update-secretariat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateSecretariatPageRoutingModule
  ],
  declarations: [UpdateSecretariatPage]
})
export class UpdateSecretariatPageModule {}
