import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvanceSearchPageRoutingModule } from './advance-search-routing.module';

import { AdvanceSearchPage } from './advance-search.page';

import { CustomReportsPage } from '../custom-reports/custom-reports.page';
import { CustomReportsPageModule } from '../custom-reports/custom-reports.module';

@NgModule({
  entryComponents: [
    CustomReportsPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvanceSearchPageRoutingModule,
    CustomReportsPageModule,
  ],
  declarations: [AdvanceSearchPage]
})
export class AdvanceSearchPageModule {}
