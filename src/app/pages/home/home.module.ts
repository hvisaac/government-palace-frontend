import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { StreetLightingReportPageModule } from '../street-lighting-report/street-lighting-report.module';
import { StreetLightingReportPage } from '../street-lighting-report/street-lighting-report.page';

import { WaterPageModule } from '../water/water.module';
import { WaterPage } from '../water/water.page';

@NgModule({
  entryComponents: [
    StreetLightingReportPage,
    WaterPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    StreetLightingReportPageModule,
    WaterPageModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
