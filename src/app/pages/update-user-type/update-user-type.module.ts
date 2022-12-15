import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateUserTypePageRoutingModule } from './update-user-type-routing.module';

import { UpdateUserTypePage } from './update-user-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateUserTypePageRoutingModule
  ],
  declarations: [UpdateUserTypePage]
})
export class UpdateUserTypePageModule {}
