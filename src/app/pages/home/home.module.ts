import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';


import { MapPage } from '../map/map.page';
import { MapPageModule } from '../map/map.module';

import { HomePageRoutingModule } from './home-routing.module';
import { GaleryPage } from '../galery/galery.page';
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
    HomePageRoutingModule,
    MapPageModule,
    GaleryPageModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
