import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomReportsPageRoutingModule } from './custom-reports-routing.module';

import { CustomReportsPage } from './custom-reports.page';
import { GaleryPage } from '../galery/galery.page';
import { GaleryPageModule } from '../galery/galery.module';

import { MapPage } from '../map/map.page';
import { MapPageModule } from '../map/map.module';
import { FinishReportPage } from '../finish-report/finish-report.page';
import { NotesPage } from '../notes/notes.page';
import { FinishReportPageModule } from '../finish-report/finish-report.module';
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
    CustomReportsPageRoutingModule,
    MapPageModule,
    GaleryPageModule,
    FinishReportPageModule,
    NotesPageModule
  ],
  declarations: [CustomReportsPage]
})
export class CustomReportsPageModule {}
