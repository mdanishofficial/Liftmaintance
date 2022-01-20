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
        path: 'installation',
        loadChildren: () => import('../Admin Roles/Installation Manager/installation/installation.module').then(m => m.InstallationPageModule)
      },
      {
        path: 'installation_page',
        loadChildren: () => import('../Admin Roles/Installation Manager/installation-page/installation-page.module').then(m => m.InstallationPagePageModule)
      },
      {
        path: 'railanddoor_stage',
        loadChildren: () => import('../Admin Roles/Installation Manager/railanddoor-stage/railanddoor-stage.module').then(m => m.RailanddoorStagePageModule)
      },
      {
        path: 'engine_stage',
        loadChildren: () => import('../Admin Roles/Installation Manager/engine-stage/engine-stage.module').then(m => m.EngineStagePageModule)
      },
      {
        path: 'liftcar_stage',
        loadChildren: () => import('../Admin Roles/Installation Manager/liftcar-stage/liftcar-stage.module').then(m => m.LiftcarStagePageModule)
      },
      {
        path: 'control_stage',
        loadChildren: () => import('../Admin Roles/Installation Manager/control-stage/control-stage.module').then(m => m.ControlStagePageModule)
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
        path: 'malfunction_details',
        loadChildren: () => import('../Admin Roles/Installation Manager/malfunctionsdetails/malfunctionsdetails.module').then(m => m.MalfunctionsdetailsPageModule)
      },
      {
        path: 'myclient',
        loadChildren: () => import('../Admin Roles/Installation Manager/myclient/myclient.module').then(m => m.MyclientPageModule)
      },
      {
        path: 'clientlisting',
        loadChildren: () => import('../Admin Roles/Installation Manager/clientlisting/clientlisting.module').then(m => m.ClientlistingPageModule)
      },
      {
        path: 'contracts',
        loadChildren: () => import('../Admin Roles/Installation Manager/contracts/contracts.module').then(m => m.ContractsPageModule)
      },
      {
        path: 'curmonthexpiring',
        loadChildren: () => import('../Admin Roles/Installation Manager/curmonthexpiring/curmonthexpiring.module').then(m => m.CurmonthexpiringPageModule)
      },
      {
        path: 'expired',
        loadChildren: () => import('../Admin Roles/Installation Manager/expired/expired.module').then(m => m.ExpiredPageModule)
      },
      {
        path: 'contractdetails',
        loadChildren: () => import('../Admin Roles/Installation Manager/contractdetails/contractdetails.module').then(m => m.ContractdetailsPageModule)
      },
      {
        path: 'paidbills',
        loadChildren: () => import('../Admin Roles/Installation Manager/paidbills/paidbills.module').then(m => m.PaidbillsPageModule)
      },
      {
        path: 'unpaidbills',
        loadChildren: () => import('../Admin Roles/Installation Manager/unpaidbills/unpaidbills.module').then(m => m.UnpaidbillsPageModule)
      },
      {
        path: 'pendingcomplain/:refresh',
        loadChildren: () => import('../Admin Roles/Installation Manager/pendingcomplain/pendingcomplain.module').then(m => m.PendingcomplainPageModule)
      },
      {
        path: 'solvedcomplain/:refresh',
        loadChildren: () => import('../Admin Roles/Installation Manager/solvedcomplain/solvedcomplain.module').then(m => m.SolvedcomplainPageModule)
      },
      {
        path: 'newpendingcomplain',
        loadChildren: () => import('../Admin Roles/Installation Manager/newpendingcomplain/newpendingcomplain.module').then(m => m.NewpendingcomplainPageModule)
      },
      {
        path: 'pendingemergencycomplain/:refresh',
        loadChildren: () => import('../Admin Roles/Installation Manager/pendingemergencycomplain/pendingemergencycomplain.module').then(m => m.PendingemergencycomplainPageModule)
      },
      {
        path: 'solvedemergencycomplain/:refresh',
        loadChildren: () => import('../Admin Roles/Installation Manager/solvedemergencycomplain/solvedemergencycomplain.module').then(m => m.SolvedemergencycomplainPageModule)
      },
      {
        path: 'newemergencycomplain',
        loadChildren: () => import('../Admin Roles/Installation Manager/newemergencycomplain/newemergencycomplain.module').then(m => m.NewemergencycomplainPageModule)
      },
      {
        path: 'repair_technicians',
        loadChildren: () => import('../Admin Roles/Installation Manager/repair-technicians/repair-technicians.module').then(m => m.RepairTechniciansPageModule)
      },
      {
        path: 'maintenance_technicians',
        loadChildren: () => import('../Admin Roles/Installation Manager/maintenance-technicians/maintenance-technicians.module').then(m => m.MaintenanceTechniciansPageModule)
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
