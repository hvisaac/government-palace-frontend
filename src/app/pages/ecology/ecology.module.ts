import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EcologyPageRoutingModule } from './ecology-routing.module';

import { EcologyPage } from './ecology.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EcologyPageRoutingModule
  ],
  declarations: [EcologyPage]
})
export class EcologyPageModule {}
