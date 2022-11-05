import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StreetLightingReportPage } from './street-lighting-report.page';

const routes: Routes = [
  {
    path: '',
    component: StreetLightingReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StreetLightingReportPageRoutingModule {}
