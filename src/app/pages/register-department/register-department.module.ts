import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterDepartmentPageRoutingModule } from './register-department-routing.module';

import { RegisterDepartmentPage } from './register-department.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterDepartmentPageRoutingModule
  ],
  declarations: [RegisterDepartmentPage]
})
export class RegisterDepartmentPageModule {}
