import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiuePageRoutingModule } from './siue-routing.module';

import { SiuePage } from './siue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiuePageRoutingModule
  ],
  declarations: [SiuePage]
})
export class SiuePageModule {}
