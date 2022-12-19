import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlobalSettingsPageRoutingModule } from './global-settings-routing.module';

import { GlobalSettingsPage } from './global-settings.page';
import { RegisterUserPage } from '../register-user/register-user.page';
import { RegisterUserPageModule } from '../register-user/register-user.module';
import { RegisterDepartmentPage } from '../register-department/register-department.page';
import { RegisterServicePhonePage } from '../register-service-phone/register-service-phone.page';
import { RegisterDepartmentPageModule } from '../register-department/register-department.module';
import { RegisterServicePhonePageModule } from '../register-service-phone/register-service-phone.module';
import { RegisterHierarchyPage } from '../register-hierarchy/register-hierarchy.page';
import { RegisterHierarchyPageModule } from '../register-hierarchy/register-hierarchy.module';
import { UpdateUserPage } from '../update-user/update-user.page';
import { UpdateDepartmentPage } from '../update-department/update-department.page';
import { UpdateServicePhonePage } from '../update-service-phone/update-service-phone.page';
import { UpdateUserPageModule } from '../update-user/update-user.module';
import { UpdateDepartmentPageModule } from '../update-department/update-department.module';
import { UpdateServicePhonePageModule } from '../update-service-phone/update-service-phone.module';
import { UpdateHierarchyPageModule } from '../update-hierarchy/update-hierarchy.module';

@NgModule({
  entryComponents: [
    RegisterUserPage,
    RegisterDepartmentPage,
    RegisterServicePhonePage,
    RegisterHierarchyPage,
    UpdateUserPage,
    UpdateDepartmentPage,
    UpdateServicePhonePage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlobalSettingsPageRoutingModule,
    RegisterUserPageModule,
    RegisterDepartmentPageModule,
    RegisterServicePhonePageModule,
    RegisterHierarchyPageModule,
    UpdateUserPageModule,
    UpdateDepartmentPageModule,
    UpdateServicePhonePageModule,
    UpdateHierarchyPageModule
  ],
  declarations: [GlobalSettingsPage]
})
export class GlobalSettingsPageModule {}
