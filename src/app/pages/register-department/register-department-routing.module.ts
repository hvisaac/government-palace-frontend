import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterDepartmentPage } from './register-department.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterDepartmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterDepartmentPageRoutingModule {}
