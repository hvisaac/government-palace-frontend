import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StreetLightingReportPageRoutingModule } from './street-lighting-report-routing.module';

import { StreetLightingReportPage } from './street-lighting-report.page';

import { GaleryPage } from '../galery/galery.page';
import { GaleryPageModule } from '../galery/galery.module';

@NgModule({
  entryComponents: [
    GaleryPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StreetLightingReportPageRoutingModule,
    GaleryPageModule,
  ],
  declarations: [StreetLightingReportPage]
})
export class StreetLightingReportPageModule {}
