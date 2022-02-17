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
        path: 'installation/:refresh',
        loadChildren: () => import('../Admin Roles/Installation Manager/installation/installation.module').then(m => m.InstallationPageModule)
      },
      {
        path: 'installation_page/:id',
        loadChildren: () => import('../Admin Roles/Installation Manager/installation-page/installation-page.module').then(m => m.InstallationPagePageModule)
      },
      {
        path: 'railanddoor_stage/:refresh',
        loadChildren: () => import('../Admin Roles/Installation Manager/railanddoor-stage/railanddoor-stage.module').then(m => m.RailanddoorStagePageModule)
      },
      {
        path: 'liftcar_stage/:refresh',
        loadChildren: () => import('../Admin Roles/Installation Manager/liftcar-stage/liftcar-stage.module').then(m => m.LiftcarStagePageModule)
      },
      {
        path: 'engine_stage/:refresh',
        loadChildren: () => import('../Admin Roles/Installation Manager/engine-stage/engine-stage.module').then(m => m.EngineStagePageModule)
      },
      {
        path: 'control_stage/:refresh',
        loadChildren: () => import('../Admin Roles/Installation Manager/control-stage/control-stage.module').then(m => m.ControlStagePageModule)
      },
      {
        path: 'currentmalfunctionslist/:refresh',
        loadChildren: () => import('../Admin Roles/Installation Manager/currentmalfunctionslist/currentmalfunctionslist.module').then(m => m.CurrentmalfunctionslistPageModule)
      },
      {
        path: 'solvedmalfunctionslist/:refresh',
        loadChildren: () => import('../Admin Roles/Installation Manager/solvedmalfunctionslist/solvedmalfunctionslist.module').then(m => m.SolvedmalfunctionslistPageModule)
      },
      {
        path: 'malfunction_details/:id/:status',
        loadChildren: () => import('../Admin Roles/Installation Manager/malfunctionsdetails/malfunctionsdetails.module').then(m => m.MalfunctionsdetailsPageModule)
      },
      {
        path: 'myclient/:refresh',
        loadChildren: () => import('../Admin Roles/Installation Manager/myclient/myclient.module').then(m => m.MyclientPageModule)
      },
      {
        path: 'clientlisting/:refresh',
        loadChildren: () => import('../Admin Roles/Installation Manager/clientlisting/clientlisting.module').then(m => m.ClientlistingPageModule)
      },
      {
        path: 'clientdetails/:id',
        loadChildren: () => import('../Admin Roles/Installation Manager/clientdetails/clientdetails.module').then(m => m.ClientdetailsPageModule)
      },
      {
        path: 'contracts/:refresh',
        loadChildren: () => import('../Admin Roles/Installation Manager/contracts/contracts.module').then(m => m.ContractsPageModule)
      },
      {
        path: 'curmonthexpiring/:refresh',
        loadChildren: () => import('../Admin Roles/Installation Manager/curmonthexpiring/curmonthexpiring.module').then(m => m.CurmonthexpiringPageModule)
      },
      {
        path: 'expired/:refresh',
        loadChildren: () => import('../Admin Roles/Installation Manager/expired/expired.module').then(m => m.ExpiredPageModule)
      },
      {
        path: 'contractdetails/:refresh',
        loadChildren: () => import('../Admin Roles/Installation Manager/contractdetails/contractdetails.module').then(m => m.ContractdetailsPageModule)
      },
      {
        path: 'updatepricecontractdetails/:refresh',
        loadChildren: () => import('../Admin Roles/Installation Manager/updatepricecontractdetails/updatepricecontractdetails.module').then(m => m.UpdatepricecontractdetailsPageModule)
      },
      {
        path: 'updateprice-modal',
        loadChildren: () => import('../Admin Roles/Installation Manager/updateprice-modal/updateprice-modal.module').then(m => m.UpdatepriceModalPageModule)
      },
      {
        path: 'paidbills/:refresh',
        loadChildren: () => import('../Admin Roles/Installation Manager/paidbills/paidbills.module').then(m => m.PaidbillsPageModule)
      },
      {
        path: 'unpaidbills/:refresh',
        loadChildren: () => import('../Admin Roles/Installation Manager/unpaidbills/unpaidbills.module').then(m => m.UnpaidbillsPageModule)
      },
      {
        path: 'billdetails/:id',
        loadChildren: () => import('../Admin Roles/Installation Manager/billdetails/billdetails.module').then( m => m.BilldetailsPageModule)
      },
      {
        path: 'updatebill-modal',
        loadChildren: () => import('../Admin Roles/Installation Manager/updatebill-modal/updatebill-modal.module').then( m => m.UpdatebillModalPageModule)
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
        path: 'repair_technicians/:refresh',
        loadChildren: () => import('../Admin Roles/Installation Manager/repair-technicians/repair-technicians.module').then(m => m.RepairTechniciansPageModule)
      },
      {
        path: 'maintenance_technicians/:refresh',
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
