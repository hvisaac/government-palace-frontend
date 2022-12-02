import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiuePage } from './siue.page';

const routes: Routes = [
  {
    path: '',
    component: SiuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiuePageRoutingModule {}
