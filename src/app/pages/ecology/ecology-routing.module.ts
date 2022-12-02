import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EcologyPage } from './ecology.page';

const routes: Routes = [
  {
    path: '',
    component: EcologyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EcologyPageRoutingModule {}
