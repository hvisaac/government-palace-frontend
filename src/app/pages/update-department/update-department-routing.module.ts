import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateDepartmentPage } from './update-department.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateDepartmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateDepartmentPageRoutingModule {}
