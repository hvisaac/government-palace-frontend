import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateDepartmentPageRoutingModule } from './update-department-routing.module';

import { UpdateDepartmentPage } from './update-department.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateDepartmentPageRoutingModule
  ],
  declarations: [UpdateDepartmentPage]
})
export class UpdateDepartmentPageModule {}
