import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlobalSettingsPageRoutingModule } from './global-settings-routing.module';

import { GlobalSettingsPage } from './global-settings.page';
import { RegisterUserPage } from '../register-user/register-user.page';
import { RegisterUserPageModule } from '../register-user/register-user.module';
import { RegisterDepartmentPage } from '../register-department/register-department.page';
import { RegisterUserTypePage } from '../register-user-type/register-user-type.page';
import { RegisterServicePhonePage } from '../register-service-phone/register-service-phone.page';
import { RegisterDepartmentPageModule } from '../register-department/register-department.module';
import { RegisterUserTypePageModule } from '../register-user-type/register-user-type.module';
import { RegisterServicePhonePageModule } from '../register-service-phone/register-service-phone.module';

@NgModule({
  entryComponents: [
    RegisterUserPage,
    RegisterDepartmentPage,
    RegisterUserTypePage,
    RegisterServicePhonePage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlobalSettingsPageRoutingModule,
    RegisterUserPageModule,
    RegisterDepartmentPageModule,
    RegisterUserTypePageModule,
    RegisterServicePhonePageModule
  ],
  declarations: [GlobalSettingsPage]
})
export class GlobalSettingsPageModule {}
