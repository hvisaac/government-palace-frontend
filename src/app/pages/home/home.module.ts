import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';


import { HomePageRoutingModule } from './home-routing.module';
import { ReportsPerDepartmentPage } from '../reports-per-department/reports-per-department.page';
import { ReportsPerDepartmentPageModule } from '../reports-per-department/reports-per-department.module';

@NgModule({
  entryComponents: [
    ReportsPerDepartmentPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReportsPerDepartmentPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
