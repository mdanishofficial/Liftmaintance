import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuTabsPage } from './menu-tabs.page';

const routes: Routes = [
  {
    path: 'menu-tabs',
    component: MenuTabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
    ]
  },
    {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuTabsPageRoutingModule {}
