import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnalitycsPageRoutingModule } from './analitycs-routing.module';

import { AnalitycsPage } from './analitycs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnalitycsPageRoutingModule
  ],
  declarations: [AnalitycsPage]
})
export class AnalitycsPageModule {}
