import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterHierarchyPage } from './register-hierarchy.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterHierarchyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterHierarchyPageRoutingModule {}
