import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterSecretariatPageRoutingModule } from './register-secretariat-routing.module';

import { RegisterSecretariatPage } from './register-secretariat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterSecretariatPageRoutingModule
  ],
  declarations: [RegisterSecretariatPage]
})
export class RegisterSecretariatPageModule {}
