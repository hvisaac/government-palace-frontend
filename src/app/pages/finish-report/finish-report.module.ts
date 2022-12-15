import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinishReportPageRoutingModule } from './finish-report-routing.module';

import { FinishReportPage } from './finish-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinishReportPageRoutingModule
  ],
  declarations: [FinishReportPage]
})
export class FinishReportPageModule {}
