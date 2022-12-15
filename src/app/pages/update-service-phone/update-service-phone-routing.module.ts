import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateServicePhonePage } from './update-service-phone.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateServicePhonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateServicePhonePageRoutingModule {}
