import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopTabsPage } from './top-tabs.page';

const routes: Routes = [
  {
    path: 'top-tabs',
    component: TopTabsPage,
      children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'raildoor',
        loadChildren: () => import('../raildoor/raildoor.module').then(m => m.RaildoorPageModule)
      },
      {
        path: 'cabin',
        loadChildren: () => import('../cabin/cabin.module').then(m => m.CabinPageModule)
      },
      {
        path: 'machine',
        loadChildren: () => import('../machine/machine.module').then(m => m.MachinePageModule)
      },
   
      {
        path: 'controldelivery',
        loadChildren: () => import('../controldelivery/controldelivery.module').then(m => m.ControldeliveryPageModule)
      },
      {
        path: 'installation',
        loadChildren: () => import('../installation/installation.module').then(m => m.InstallationPageModule)
      },
      {
        path: 'deatiled_current_malfunctions',
        loadChildren: () => import('../detailed_current_malfunctions/detailed_current_malfunctions.module').then(m => m.detailed_current_malfunctionsPageModule)
      },
      {
        path: 'deatiled_solved_malfunctions',
        loadChildren: () => import('../detailed-solved-malfunctions/detailed-solved-malfunctions.module').then(m => m.DetailedSolvedMalfunctionsPageModule)
      },
      {
        path: 'bill_details',
        loadChildren: () => import('../billdetails/billdetails.module').then(m => m.BilldetailsPageModule)
      },
      {
        path: 'newpendingcomplain',
        loadChildren: () => import('../newpendingcomplain/newpendingcomplain.module').then(m => m.NewpendingcomplainPageModule)
      },
      {
        path: 'newemergencycomplain',
        loadChildren: () => import('../newemergencycomplain/newemergencycomplain.module').then(m => m.NewemergencycomplainPageModule)
      },
      ]
  },
  {
    path: '',
    redirectTo: '/top-tabs/raildoor',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopTabsPageRoutingModule {}
