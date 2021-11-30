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
        path: 'installation',
        loadChildren: () => import('../installation/installation.module').then(m => m.InstallationPageModule)
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
    path: 'currentmalfunctionslist',
    loadChildren: () => import('../currentmalfunctions/currentmalfunctions.module').then(m => m.CurrentmalfunctionsPageModule)
  },

  {
    path: 'solvedcomplain',
    loadChildren: () => import('../solvedcomplain/solvedcomplain.module').then(m => m.SolvedcomplainPageModule)
  },
  {
    path: 'pendingcomplain',
    loadChildren: () => import('../pendingcomplain/pendingcomplain.module').then(m => m.PendingcomplainPageModule)
  },
  {
    path: 'solvedemergencycomplain',
    loadChildren: () => import('../solvedemergencycomplain/solvedemergencycomplain.module').then(m => m.SolvedemergencycomplainPageModule)
  },
  {
    path: 'pendingemergencycomplain',
    loadChildren: () => import('../pendingemergencycomplain/pendingemergencycomplain.module').then(m => m.PendingemergencycomplainPageModule)
  },
  {
    path: 'newemergencycomplain',
    loadChildren: () => import('../newemergencycomplain/newemergencycomplain.module').then(m => m.NewemergencycomplainPageModule)
  },
  {
    path: 'newpendingcomplain',
    loadChildren: () => import('../newpendingcomplain/newpendingcomplain.module').then(m => m.NewpendingcomplainPageModule)
  },
  {
    path: 'unpaidbills',
    loadChildren: () => import('../unpaidbills/unpaidbills.module').then(m => m.UnpaidbillsPageModule)
  },
  {
    path: 'paidbills',
    loadChildren: () => import('../paidbills/paidbills.module').then(m => m.PaidbillsPageModule)
  },
  {
    path: 'billdetails',
    loadChildren: () => import('../billdetails/billdetails.module').then(m => m.BilldetailsPageModule)
  },
  {
    path: 'visitdetails',
    loadChildren: () => import('../visitdetails/visitdetails.module').then(m => m.VisitdetailsPageModule)
  },
  {
    path: 'inquiries',
    loadChildren: () => import('../inquiries/inquiries.module').then(m => m.InquiriesPageModule)
  },
  {
    path: 'newinquiries',
    loadChildren: () => import('../newinquiries/newinquiries.module').then(m => m.NewinquiriesPageModule)
  },
  {
    path: 'faqs',
    loadChildren: () => import('../faqs/faqs.module').then(m => m.FaqsPageModule)
  },
// maintenance manager tabs
  {
    path: 'adminroles/maintenancemanager/menu',
    loadChildren: () => import('../Admin Roles/Maintenance Manager/menu/menu.module').then(m => m.MenuPageModule)
  },
  {
    path: 'adminroles/maintenancemanager/maintenance-manager-maintenancelist',
    loadChildren: () => import('../Admin Roles/Maintenance Manager/maintenance-manager-maintenancelist/maintenance-manager-maintenancelist.module').then(m => m.MaintenanceManagerMaintenancelistPageModule)
  },
  {
    path: 'adminroles/maintenancemanager/maintenance-manager-currentmalfunctionslist',
    loadChildren: () => import('../Admin Roles/Maintenance Manager/maintenance-manager-currentmalfunctionslist/maintenance-manager-currentmalfunctionslist.module').then(m => m.MaintenanceManagerCurrentmalfunctionslistPageModule)
  },
  {
    path: 'adminroles/maintenancemanager/maintenance-manager-solvedmalfunctionslist',
    loadChildren: () => import('../Admin Roles/Maintenance Manager/maintenance-manager-solvedmalfunctionslist/maintenance-manager-solvedmalfunctionslist.module').then(m => m.MaintenanceManagerSolvedmalfunctionslistPageModule)
  },
  {
    path: 'adminroles/maintenancemanager/maintenancevisits',
    loadChildren: () => import('../Admin Roles/Maintenance Manager/maintenancevisits/maintenancevisits.module').then(m => m.MaintenancevisitsPageModule)
  },
  {
    path: 'adminroles/maintenancemanager/maintenancevisitsassigned',
    loadChildren: () => import('../Admin Roles/Maintenance Manager/maintenancevisitsassigned/maintenancevisitsassigned.module').then(m => m.MaintenancevisitsassignedPageModule)
  },
  {
    path: 'adminroles/maintenancemanager/maintenancevisitsunassigned',
    loadChildren: () => import('../Admin Roles/Maintenance Manager/maintenancevisitsunassigned/maintenancevisitsunassigned.module').then(m => m.MaintenancevisitsunassignedPageModule)
  },
  {
    path: 'adminroles/maintenancemanager/maintenancevisitsnotvisits',
    loadChildren: () => import('../Admin Roles/Maintenance Manager/maintenancevisitsnotvisits/maintenancevisitsnotvisits.module').then(m => m.MaintenancevisitsnotvisitsPageModule)
  },
  {
    path: 'adminroles/maintenancemanager/myclient',
    loadChildren: () => import('../Admin Roles/Maintenance Manager/myclient/myclient.module').then(m => m.MyclientPageModule)
  },
  {
    path: 'adminroles/maintenancemanager/clientlisting',
    loadChildren: () => import('../Admin Roles/Maintenance Manager/clientlisting/clientlisting.module').then(m => m.ClientlistingPageModule)
  },
  {
    path: 'adminroles/maintenancemanager/contracts',
    loadChildren: () => import('../Admin Roles/Maintenance Manager/contracts/contracts.module').then(m => m.ContractsPageModule)
  },
  {
    path: 'adminroles/maintenancemanager/curmonthexpiring',
    loadChildren: () => import('../Admin Roles/Maintenance Manager/curmonthexpiring/curmonthexpiring.module').then(m => m.CurmonthexpiringPageModule)
  },
  {
    path: 'adminroles/maintenancemanager/expired',
    loadChildren: () => import('../Admin Roles/Maintenance Manager/expired/expired.module').then(m => m.ExpiredPageModule)
  },
  {
    path: 'adminroles/maintenancemanager/contractdetails',
    loadChildren: () => import('../Admin Roles/Maintenance Manager/contractdetails/contractdetails.module').then(m => m.ContractdetailsPageModule)
  },
  {
    path: 'adminroles/maintenancemanager/updatepricecontractdetails',
    loadChildren: () => import('../Admin Roles/Maintenance Manager/updatepricecontractdetails/updatepricecontractdetails.module').then(m => m.UpdatepricecontractdetailsPageModule)
  },
  {
    path: 'adminroles/maintenancemanager/report',
    loadChildren: () => import('../Admin Roles/Maintenance Manager/report/report.module').then(m => m.ReportPageModule)
  },
  {
    path: 'adminroles/maintenancemanager/respond',
    loadChildren: () => import('../Admin Roles/Maintenance Manager/respond/respond.module').then(m => m.RespondPageModule)
  },
  {
    path: 'adminroles/maintenancemanager/clientinquiries',
    loadChildren: () => import('../Admin Roles/Maintenance Manager/clientinquiries/clientinquiries.module').then(m => m.ClientinquiriesPageModule)
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
