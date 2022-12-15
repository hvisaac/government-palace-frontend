import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllReportsPageRoutingModule } from './all-reports-routing.module';

import { AllReportsPage } from './all-reports.page';
import { MapPage } from '../map/map.page';
import { GaleryPage } from '../galery/galery.page';
import { MapPageModule } from '../map/map.module';
import { GaleryPageModule } from '../galery/galery.module';

@NgModule({
  entryComponents: [
    MapPage,
    GaleryPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllReportsPageRoutingModule,
    MapPageModule,
    GaleryPageModule
  ],
  declarations: [AllReportsPage]
})
export class AllReportsPageModule {}
