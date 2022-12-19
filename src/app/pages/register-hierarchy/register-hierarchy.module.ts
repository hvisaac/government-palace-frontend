import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterHierarchyPageRoutingModule } from './register-hierarchy-routing.module';

import { RegisterHierarchyPage } from './register-hierarchy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterHierarchyPageRoutingModule
  ],
  declarations: [RegisterHierarchyPage]
})
export class RegisterHierarchyPageModule {}
