import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportsPerDepartmentPageRoutingModule } from './reports-per-department-routing.module';

import { ReportsPerDepartmentPage } from './reports-per-department.page';

import { MapPage } from '../map/map.page';
import { GaleryPage } from '../galery/galery.page';
import { MapPageModule } from '../map/map.module';
import { GaleryPageModule } from '../galery/galery.module';
import { FinishReportPage } from '../finish-report/finish-report.page';
import { FinishReportPageModule } from '../finish-report/finish-report.module';
import { NotesPage } from '../notes/notes.page';
import { NotesPageModule } from '../notes/notes.module';

@NgModule({
  entryComponents: [
    MapPage,
    GaleryPage,
    FinishReportPage,
    NotesPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportsPerDepartmentPageRoutingModule,
    MapPageModule,
    GaleryPageModule,
    FinishReportPageModule,
    NotesPageModule
  ],
  declarations: [ReportsPerDepartmentPage]
})
export class ReportsPerDepartmentPageModule {}
