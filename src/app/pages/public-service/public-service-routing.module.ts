import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicServicePage } from './public-service.page';

const routes: Routes = [
  {
    path: '',
    component: PublicServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicServicePageRoutingModule {}
