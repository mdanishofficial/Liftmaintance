import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'modal-page',
    loadChildren: () => import('./modal-page/modal-page.module').then( m => m.ModalPagePageModule)
  },
  {
    path: 'modal-page',
    loadChildren: () => import('./modal-page/modal-page.module').then( m => m.ModalPagePageModule)
  },
  {
    path: 'parts-modal',
    loadChildren: () => import('./parts-modal/parts-modal.module').then( m => m.PartsModalPageModule)
  },
  {
    path: 'ratings-modal',
    loadChildren: () => import('./ratings-modal/ratings-modal.module').then( m => m.RatingsModalPageModule)
  },
  {
    path: 'banktransfer-modal',
    loadChildren: () => import('./banktransfer-modal/banktransfer-modal.module').then( m => m.BanktransferModalPageModule)
  },
  {
    path: 'pos-modal',
    loadChildren: () => import('./pos-modal/pos-modal.module').then( m => m.PosModalPageModule)
  },
  {
    path: 'billpaid',
    loadChildren: () => import('./billpaid/billpaid.module').then( m => m.BillpaidPageModule)
  },
  {
    path: 'machine',
    loadChildren: () => import('./machine/machine.module').then( m => m.MachinePageModule)
  },
  {
    path: 'cabin',
    loadChildren: () => import('./cabin/cabin.module').then( m => m.CabinPageModule)
  },
  {
    path: 'raildoor',
    loadChildren: () => import('./raildoor/raildoor.module').then( m => m.RaildoorPageModule)
  },
  {
    path: 'controldelivery',
    loadChildren: () => import('./controldelivery/controldelivery.module').then( m => m.ControldeliveryPageModule)
  },
  {
    path: 'maintenancelist',
    loadChildren: () => import('./maintenancelist/maintenancelist.module').then( m => m.MaintenancelistPageModule)
  },
  {
    path: 'malfunctionslist',
    loadChildren: () => import('./malfunctionslist/malfunctionslist.module').then( m => m.MalfunctionslistPageModule)
  },
  {
    path: 'currentmalfunctions',
    loadChildren: () => import('./currentmalfunctions/currentmalfunctions.module').then( m => m.CurrentmalfunctionsPageModule)
  },
  {
    path: 'solvedcomplain',
    loadChildren: () => import('./solvedcomplain/solvedcomplain.module').then( m => m.SolvedcomplainPageModule)
  },
  {
    path: 'pendingcomplain',
    loadChildren: () => import('./pendingcomplain/pendingcomplain.module').then( m => m.PendingcomplainPageModule)
  },
  {
    path: 'solvedemergencycomplain',
    loadChildren: () => import('./solvedemergencycomplain/solvedemergencycomplain.module').then( m => m.SolvedemergencycomplainPageModule)
  },
  {
    path: 'pendingemergencycomplain',
    loadChildren: () => import('./pendingemergencycomplain/pendingemergencycomplain.module').then( m => m.PendingemergencycomplainPageModule)
  },
  {
    path: 'paidbills',
    loadChildren: () => import('./paidbills/paidbills.module').then( m => m.PaidbillsPageModule)
  },
  {
    path: 'unpaidbills',
    loadChildren: () => import('./unpaidbills/unpaidbills.module').then( m => m.UnpaidbillsPageModule)
  },
  {
    path: 'newemergencycomplain',
    loadChildren: () => import('./newemergencycomplain/newemergencycomplain.module').then( m => m.NewemergencycomplainPageModule)
  },
  {
    path: 'newpendingcomplain',
    loadChildren: () => import('./newpendingcomplain/newpendingcomplain.module').then( m => m.NewpendingcomplainPageModule)
  },
  {
    path: 'billdetails',
    loadChildren: () => import('./billdetails/billdetails.module').then( m => m.BilldetailsPageModule)
  },
  {
    path: 'visitdetails',
    loadChildren: () => import('./visitdetails/visitdetails.module').then( m => m.VisitdetailsPageModule)
  },
  {
    path: 'installation',
    loadChildren: () => import('./installation/installation.module').then( m => m.InstallationPageModule)
  },
  {
    path: 'updatepayment-modal',
    loadChildren: () => import('./updatepayment-modal/updatepayment-modal.module').then( m => m.UpdatepaymentModalPageModule)
  },
  {
    path: 'inquiries',
    loadChildren: () => import('./inquiries/inquiries.module').then( m => m.InquiriesPageModule)
  },
  {
    path: 'faqs',
    loadChildren: () => import('./faqs/faqs.module').then( m => m.FaqsPageModule)
  },
  {
    path: 'newinquiries',
    loadChildren: () => import('./newinquiries/newinquiries.module').then( m => m.NewinquiriesPageModule)
  },
  {
    path: 'sendinquiry-modal',
    loadChildren: () => import('./sendinquiry-modal/sendinquiry-modal.module').then( m => m.SendinquiryModalPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./Admin Roles/Maintenance Manager/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'maintenance-manager-maintenancelist',
    loadChildren: () => import('./Admin Roles/Maintenance Manager/maintenance-manager-maintenancelist/maintenance-manager-maintenancelist.module').then( m => m.MaintenanceManagerMaintenancelistPageModule)
  },
  {
    path: 'maintenance-manager-currentmalfunctionslist',
    loadChildren: () => import('./Admin Roles/Maintenance Manager/maintenance-manager-currentmalfunctionslist/maintenance-manager-currentmalfunctionslist.module').then( m => m.MaintenanceManagerCurrentmalfunctionslistPageModule)
  },
  {
    path: 'maintenance-manager-solvedmalfunctionslist',
    loadChildren: () => import('./Admin Roles/Maintenance Manager/maintenance-manager-solvedmalfunctionslist/maintenance-manager-solvedmalfunctionslist.module').then( m => m.MaintenanceManagerSolvedmalfunctionslistPageModule)
  },
  {
    path: 'maintenancevisits',
    loadChildren: () => import('./Admin Roles/Maintenance Manager/maintenancevisits/maintenancevisits.module').then( m => m.MaintenancevisitsPageModule)
  },
  {
    path: 'myclient',
    loadChildren: () => import('./Admin Roles/Maintenance Manager/myclient/myclient.module').then( m => m.MyclientPageModule)
  },
  {
    path: 'clientlisting',
    loadChildren: () => import('./Admin Roles/Maintenance Manager/clientlisting/clientlisting.module').then( m => m.ClientlistingPageModule)
  },
  {
    path: 'contracts',
    loadChildren: () => import('./Admin Roles/Maintenance Manager/contracts/contracts.module').then( m => m.ContractsPageModule)
  },
  {
    path: 'curmonthexpiring',
    loadChildren: () => import('./Admin Roles/Maintenance Manager/curmonthexpiring/curmonthexpiring.module').then( m => m.CurmonthexpiringPageModule)
  },
  {
    path: 'expired',
    loadChildren: () => import('./Admin Roles/Maintenance Manager/expired/expired.module').then( m => m.ExpiredPageModule)
  },
  {
    path: 'contractdetails',
    loadChildren: () => import('./Admin Roles/Maintenance Manager/contractdetails/contractdetails.module').then( m => m.ContractdetailsPageModule)
  },
  {
    path: 'updatepricecontractdetails',
    loadChildren: () => import('./Admin Roles/Maintenance Manager/updatepricecontractdetails/updatepricecontractdetails.module').then( m => m.UpdatepricecontractdetailsPageModule)
  },
  {
    path: 'updateprice-modal',
    loadChildren: () => import('./Admin Roles/Maintenance Manager/updateprice-modal/updateprice-modal.module').then( m => m.UpdatepriceModalPageModule)
  },
  {
    path: 'maintenancevisitsassigned',
    loadChildren: () => import('./Admin Roles/Maintenance Manager/maintenancevisitsassigned/maintenancevisitsassigned.module').then( m => m.MaintenancevisitsassignedPageModule)
  },
  {
    path: 'maintenancevisitsunassigned',
    loadChildren: () => import('./Admin Roles/Maintenance Manager/maintenancevisitsunassigned/maintenancevisitsunassigned.module').then( m => m.MaintenancevisitsunassignedPageModule)
  },
  {
    path: 'maintenancevisitsnotvisits',
    loadChildren: () => import('./Admin Roles/Maintenance Manager/maintenancevisitsnotvisits/maintenancevisitsnotvisits.module').then( m => m.MaintenancevisitsnotvisitsPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./Admin Roles/Maintenance Manager/report/report.module').then( m => m.ReportPageModule)
  },
  {
    path: 'respond',
    loadChildren: () => import('./Admin Roles/Maintenance Manager/respond/respond.module').then( m => m.RespondPageModule)
  },
  {
    path: 'clientinquiries',
    loadChildren: () => import('./Admin Roles/Maintenance Manager/clientinquiries/clientinquiries.module').then( m => m.ClientinquiriesPageModule)
  },
 
 ];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
