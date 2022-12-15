import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinishReportPage } from './finish-report.page';

const routes: Routes = [
  {
    path: '',
    component: FinishReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinishReportPageRoutingModule {}
