import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstallationManagerTabsPage } from './installation-manager-tabs.page';

const routes: Routes = [
  {
    path: 'installation_manager',
    component: InstallationManagerTabsPage,
    children: [
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'menu',
        loadChildren: () => import('../Admin Roles/Installation Manager/menu/menu.module').then(m => m.MenuPageModule)
      },
      {
        path: 'currentmalfunctionslist',
        loadChildren: () => import('../Admin Roles/Installation Manager/currentmalfunctionslist/currentmalfunctionslist.module').then(m => m.CurrentmalfunctionslistPageModule)
      },
      {
        path: 'solvedmalfunctionslist',
        loadChildren: () => import('../Admin Roles/Installation Manager/solvedmalfunctionslist/solvedmalfunctionslist.module').then(m => m.SolvedmalfunctionslistPageModule)
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/installation_manager/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstallationManagerTabsPageRoutingModule {}
