import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnalitycsPage } from './analitycs.page';

const routes: Routes = [
  {
    path: '',
    component: AnalitycsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalitycsPageRoutingModule {}
