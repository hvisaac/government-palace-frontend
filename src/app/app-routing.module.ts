import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register-user',
    loadChildren: () => import('./pages/register-user/register-user.module').then( m => m.RegisterUserPageModule)
  },
  {
    path: 'analitycs',
    loadChildren: () => import('./pages/analitycs/analitycs.module').then( m => m.AnalitycsPageModule)
  },
  {
    path: 'galery',
    loadChildren: () => import('./pages/galery/galery.module').then( m => m.GaleryPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'advance-search',
    loadChildren: () => import('./pages/advance-search/advance-search.module').then( m => m.AdvanceSearchPageModule)
  },
  {
    path: 'custom-reports',
    loadChildren: () => import('./pages/custom-reports/custom-reports.module').then( m => m.CustomReportsPageModule)
  },
  {
    path: 'reports-per-department',
    loadChildren: () => import('./pages/reports-per-department/reports-per-department.module').then( m => m.ReportsPerDepartmentPageModule)
  },
  {
    path: 'all-reports',
    loadChildren: () => import('./pages/all-reports/all-reports.module').then( m => m.AllReportsPageModule)
  },
  {
    path: 'global-settings',
    loadChildren: () => import('./pages/global-settings/global-settings.module').then( m => m.GlobalSettingsPageModule)
  },
  {
    path: 'register-department',
    loadChildren: () => import('./pages/register-department/register-department.module').then( m => m.RegisterDepartmentPageModule)
  },
  {
    path: 'register-user-type',
    loadChildren: () => import('./pages/register-user-type/register-user-type.module').then( m => m.RegisterUserTypePageModule)
  },
  {
    path: 'register-service-phone',
    loadChildren: () => import('./pages/register-service-phone/register-service-phone.module').then( m => m.RegisterServicePhonePageModule)
  },
  {
    path: 'finish-report',
    loadChildren: () => import('./pages/finish-report/finish-report.module').then( m => m.FinishReportPageModule)
  },
  {
    path: 'update-department',
    loadChildren: () => import('./pages/update-department/update-department.module').then( m => m.UpdateDepartmentPageModule)
  },
  {
    path: 'update-service-phone',
    loadChildren: () => import('./pages/update-service-phone/update-service-phone.module').then( m => m.UpdateServicePhonePageModule)
  },
  {
    path: 'update-user-type',
    loadChildren: () => import('./pages/update-user-type/update-user-type.module').then( m => m.UpdateUserTypePageModule)
  },
  {
    path: 'update-user',
    loadChildren: () => import('./pages/update-user/update-user.module').then( m => m.UpdateUserPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
