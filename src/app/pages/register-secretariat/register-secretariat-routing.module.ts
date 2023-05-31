import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterSecretariatPage } from './register-secretariat.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterSecretariatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterSecretariatPageRoutingModule {}
