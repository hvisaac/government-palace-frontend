import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateUserTypePage } from './update-user-type.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateUserTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateUserTypePageRoutingModule {}
