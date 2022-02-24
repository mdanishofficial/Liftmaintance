import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoactivateLoginGuard } from 'src/guards/autoactivate-login.guard';
import { MenuTabsPage } from './menu-tabs.page';

const routes: Routes = [
  {
    path: 'menu-tabs',
    component: MenuTabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule),
        canActivate: [AutoactivateLoginGuard]
      },
    ]
  },
    {
      path: '',
      redirectTo: 'menu-tabs/tab1',
      pathMatch: 'full'
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuTabsPageRoutingModule {}
