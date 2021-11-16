import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
      path: 'billpaid',
      loadChildren: () => import('../billpaid/billpaid.module').then(m => m.BillpaidPageModule)
    },
    {
    path: 'machine',
    loadChildren: () => import('../machine/machine.module').then(m => m.MachinePageModule)
  },
  {
    path: 'cabin',
    loadChildren: () => import('../cabin/cabin.module').then(m => m.CabinPageModule)
  },
  {
    path: 'raildoor',
    loadChildren: () => import('../raildoor/raildoor.module').then(m => m.RaildoorPageModule)
  },
  {
    path: 'controldelivery',
    loadChildren: () => import('../controldelivery/controldelivery.module').then(m => m.ControldeliveryPageModule)
  },
  {
    path: 'maintenancelist',
    loadChildren: () => import('../maintenancelist/maintenancelist.module').then(m => m.MaintenancelistPageModule)
  },
  {
    path: 'malfunctionslist',
    loadChildren: () => import('../malfunctionslist/malfunctionslist.module').then(m => m.MalfunctionslistPageModule)
  },
  {
    path: 'malfunctionslist/current',
    loadChildren: () => import('../currentmalfunctions/currentmalfunctions.module').then(m => m.CurrentmalfunctionsPageModule)
  },

  {
    path: 'complain/solvedcomplain',
    loadChildren: () => import('../solvedcomplain/solvedcomplain.module').then(m => m.SolvedcomplainPageModule)
  },
  {
    path: 'complain/pendingcomplain',
    loadChildren: () => import('../pendingcomplain/pendingcomplain.module').then(m => m.PendingcomplainPageModule)
  },
  {
    path: 'complain/solvedemergencycomplain',
    loadChildren: () => import('../solvedemergencycomplain/solvedemergencycomplain.module').then(m => m.SolvedemergencycomplainPageModule)
  },
  {
    path: 'complain/pendingemergencycomplain',
    loadChildren: () => import('../pendingemergencycomplain/pendingemergencycomplain.module').then(m => m.PendingemergencycomplainPageModule)
  },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
