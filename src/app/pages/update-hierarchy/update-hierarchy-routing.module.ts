import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateHierarchyPage } from './update-hierarchy.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateHierarchyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateHierarchyPageRoutingModule {}
