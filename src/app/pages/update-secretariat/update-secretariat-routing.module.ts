import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateSecretariatPage } from './update-secretariat.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateSecretariatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateSecretariatPageRoutingModule {}
