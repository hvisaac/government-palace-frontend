import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicServicePageRoutingModule } from './public-service-routing.module';

import { PublicServicePage } from './public-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicServicePageRoutingModule
  ],
  declarations: [PublicServicePage]
})
export class PublicServicePageModule {}
