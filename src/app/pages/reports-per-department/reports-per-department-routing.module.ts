import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportsPerDepartmentPage } from './reports-per-department.page';

const routes: Routes = [
  {
    path: '',
    component: ReportsPerDepartmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsPerDepartmentPageRoutingModule {}
