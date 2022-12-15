import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterUserTypePage } from './register-user-type.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterUserTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterUserTypePageRoutingModule {}
