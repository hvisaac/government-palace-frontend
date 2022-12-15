import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterUserTypePageRoutingModule } from './register-user-type-routing.module';

import { RegisterUserTypePage } from './register-user-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterUserTypePageRoutingModule
  ],
  declarations: [RegisterUserTypePage]
})
export class RegisterUserTypePageModule {}
