import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateHierarchyPageRoutingModule } from './update-hierarchy-routing.module';

import { UpdateHierarchyPage } from './update-hierarchy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateHierarchyPageRoutingModule
  ],
  declarations: [UpdateHierarchyPage]
})
export class UpdateHierarchyPageModule {}
