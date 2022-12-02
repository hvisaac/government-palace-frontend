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
    path: 'galery',
    loadChildren: () => import('./pages/galery/galery.module').then( m => m.GaleryPageModule)
  },
  {
    path: 'public-service',
    loadChildren: () => import('./pages/public-service/public-service.module').then( m => m.PublicServicePageModule)
  },
  {
    path: 'siue',
    loadChildren: () => import('./pages/siue/siue.module').then( m => m.SiuePageModule)
  },
  {
    path: 'security',
    loadChildren: () => import('./pages/security/security.module').then( m => m.SecurityPageModule)
  },
  {
    path: 'ecology',
    loadChildren: () => import('./pages/ecology/ecology.module').then( m => m.EcologyPageModule)
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
