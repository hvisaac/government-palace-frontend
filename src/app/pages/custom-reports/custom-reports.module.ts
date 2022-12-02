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

@NgModule({
  entryComponents: [
    MapPage,
    GaleryPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomReportsPageRoutingModule,
    MapPageModule,
    GaleryPageModule,
  ],
  declarations: [CustomReportsPage]
})
export class CustomReportsPageModule {}
