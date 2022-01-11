import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./installation-manager-tabs/installation-manager-tabs.module').then(m => m.InstallationManagerTabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./menu-tabs/menu-tabs.module').then(m => m.MenuTabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./top-tabs/top-tabs.module').then(m => m.TopTabsPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'paynow_modal',
    loadChildren: () => import('./paynow_modal/paynow-modal.module').then( m => m.paynow_modalPageModule)
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
    path: 'maintenancelist/:refresh',
    loadChildren: () => import('./maintenancelist/maintenancelist.module').then( m => m.MaintenancelistPageModule)
  },
  {
    path: 'malfunctionslist/:refresh',
    loadChildren: () => import('./malfunctionslist/malfunctionslist.module').then( m => m.MalfunctionslistPageModule)
  },
  {
    path: 'currentmalfunctions/:refresh',
    loadChildren: () => import('./currentmalfunctions/currentmalfunctions.module').then( m => m.CurrentmalfunctionsPageModule)
  },
  {
    path: 'detailed_current_malfunctions/:id',
    loadChildren: () => import('./detailed_current_malfunctions/detailed_current_malfunctions.module').then( m => m.detailed_current_malfunctionsPageModule)
  },
  {
    path: 'detailed_solved_malfunctions/:id',
    loadChildren: () => import('./detailed-solved-malfunctions/detailed-solved-malfunctions.module').then( m => m.DetailedSolvedMalfunctionsPageModule)
  },
  {
    path: 'solvedcomplain',
    loadChildren: () => import('./solvedcomplain/solvedcomplain.module').then( m => m.SolvedcomplainPageModule)
  },
  {
    path: 'pendingcomplain/:refresh',
    loadChildren: () => import('./pendingcomplain/pendingcomplain.module').then( m => m.PendingcomplainPageModule)
  },
  {
    path: 'solvedemergencycomplain',
    loadChildren: () => import('./solvedemergencycomplain/solvedemergencycomplain.module').then( m => m.SolvedemergencycomplainPageModule)
  },
  {
    path: 'pendingemergencycomplain/:refresh',
    loadChildren: () => import('./pendingemergencycomplain/pendingemergencycomplain.module').then( m => m.Pendingemergencycomplain)
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
    path: 'billdetails/:id',
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
    loadChildren: () => import('./Admin Roles/Mobile_Supervisor/contracts/contracts.module').then( m => m.ContractsPageModule)
  },
  {
    path: 'curmonthexpiring',
    loadChildren: () => import('./Admin Roles/Mobile_Supervisor/curmonthexpiring/curmonthexpiring.module').then( m => m.CurmonthexpiringPageModule)
  },
  {
    path: 'expired',
    loadChildren: () => import('./Admin Roles/Mobile_Supervisor/expired/expired.module').then( m => m.ExpiredPageModule)
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
  {
    path: 'malfunctionsdetails',
    loadChildren: () => import('./Admin Roles/Maintenance Manager/malfunctionsdetails/malfunctionsdetails.module').then( m => m.MalfunctionsdetailsPageModule)
  },
  {
    path: 'solvedmalfunctionsdetails',
    loadChildren: () => import('./Admin Roles/Maintenance Manager/solvedmalfunctionsdetails/solvedmalfunctionsdetails.module').then( m => m.SolvedmalfunctionsdetailsPageModule)
  },
  {
    path: 'myteam-maintenance-technicians',
    loadChildren: () => import('./Admin Roles/Maintenance Manager/myteam-maintenance-technicians/myteam-maintenance-technicians.module').then( m => m.MyteamMaintenanceTechniciansPageModule)
  },
  {
    path: 'myteam-repair-technicians',
    loadChildren: () => import('./Admin Roles/Maintenance Manager/myteam-repair-technicians/myteam-repair-technicians.module').then( m => m.MyteamRepairTechniciansPageModule)
  },
  {
    path: 'datepicker-maintenance-visits',
    loadChildren: () => import('./Admin Roles/Maintenance Manager/datepicker-maintenance-visits/datepicker-maintenance-visits.module').then( m => m.DatepickerMaintenanceVisitsPageModule)
  },
  {
    path: 'malfunction-type-modal',
    loadChildren: () => import('./Admin Roles/Maintenance Manager/malfunction-type-modal/malfunction-type-modal.module').then( m => m.MalfunctionTypeModalPageModule)
  },
  {
    path: 'malfunction-level-modal',
    loadChildren: () => import('./Admin Roles/Maintenance Manager/malfunction-level-modal/malfunction-level-modal.module').then( m => m.MalfunctionLevelModalPageModule)
  },
  {
    path: 'malfunction-status-modal',
    loadChildren: () => import('./Admin Roles/Maintenance Manager/malfunction-status-modal/malfunction-status-modal.module').then( m => m.MalfunctionStatusModalPageModule)
  },
  {
    path: 'issuebillmodal',
    loadChildren: () => import('./Admin Roles/Maintenance Manager/issuebillmodal/issuebillmodal.module').then( m => m.IssuebillmodalPageModule)
  },
  {
    path: 'uploadpayment-modal',
    loadChildren: () => import('./Admin Roles/Maintenance Manager/uploadpayment-modal/uploadpayment-modal.module').then( m => m.UploadpaymentModalPageModule)
  },
  {
    path: 'forwardmalfunctions-modal',
    loadChildren: () => import('./Admin Roles/Maintenance Manager/forwardmalfunctions-modal/forwardmalfunctions-modal.module').then( m => m.ForwardmalfunctionsModalPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./Admin Roles/Maintenance_Technician/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'todaysvisits',
    loadChildren: () => import('./Admin Roles/Maintenance_Technician/todaysvisits/todaysvisits.module').then( m => m.TodaysvisitsPageModule)
  },
  {
    path: 'upcomingvisits',
    loadChildren: () => import('./Admin Roles/Maintenance_Technician/upcomingvisits/upcomingvisits.module').then( m => m.UpcomingvisitsPageModule)
  },
  {
    path: 'previousvisits',
    loadChildren: () => import('./Admin Roles/Maintenance_Technician/previousvisits/previousvisits.module').then( m => m.PreviousvisitsPageModule)
  },
  {
    path: 'clientdetails',
    loadChildren: () => import('./Admin Roles/Maintenance_Technician/clientdetails/clientdetails.module').then( m => m.ClientdetailsPageModule)
  },
  {
    path: 'visitreport',
    loadChildren: () => import('./Admin Roles/Maintenance_Technician/visitreport/visitreport.module').then( m => m.VisitreportPageModule)
  },
  {
    path: 'notvisited-modal',
    loadChildren: () => import('./Admin Roles/Maintenance_Technician/notvisited-modal/notvisited-modal.module').then( m => m.NotvisitedModalPageModule)
  },
  {
    path: 'previousreports',
    loadChildren: () => import('./Admin Roles/Maintenance_Technician/previousreports/previousreports.module').then( m => m.PreviousreportsPageModule)
  },
  {
    path: 'liftdetail',
    loadChildren: () => import('./Admin Roles/Maintenance_Technician/liftdetail/liftdetail.module').then( m => m.LiftdetailPageModule)
  },
  {
    path: 'clientliftdetails',
    loadChildren: () => import('./Admin Roles/Maintenance_Technician/clientliftdetails/clientliftdetails.module').then( m => m.ClientliftdetailsPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./Admin Roles/Maintenance_Repair_Technician/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'newmalfunctions',
    loadChildren: () => import('./Admin Roles/Installation Technician/newmalfunctions/newmalfunctions.module').then( m => m.NewmalfunctionsPageModule)
  },
  {
    path: 'completedmalfunctions',
    loadChildren: () => import('./Admin Roles/Installation Technician/completedmalfunctions/completedmalfunctions.module').then( m => m.CompletedmalfunctionsPageModule)
  },
  {
    path: 'maintenance-malfunction-detail-update',
    loadChildren: () => import('./Admin Roles/Installation Technician/maintenance-malfunction-detail-update/maintenance-malfunction-detail-update.module').then( m => m.MaintenanceMalfunctionDetailUpdatePageModule)
  },
  {
    path: 'maintenance-malfunction-detail-view',
    loadChildren: () => import('./Admin Roles/Installation Technician/maintenance-malfunction-detail-view/maintenance-malfunction-detail-view.module').then( m => m.MaintenanceMalfunctionDetailViewPageModule)
  },
  {
    path: 'installation-page',
    loadChildren: () => import('./Admin Roles/Installation Manager/installation-page/installation-page.module').then( m => m.InstallationPagePageModule)
  },
  {
    path: 'updatepayment-modal',
    loadChildren: () => import('./Admin Roles/Installation Manager/updatepayment-modal/updatepayment-modal.module').then( m => m.UpdatepaymentModalPageModule)
  },
  {
    path: 'installation-stage',
    loadChildren: () => import('./Admin Roles/Installation Manager/installation-stage/installation-stage.module').then( m => m.InstallationStagePageModule)
  },
  {
    path: 'task-details',
    loadChildren: () => import('./Admin Roles/Installation Technician/task-details/task-details.module').then( m => m.TaskDetailsPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./Admin Roles/Installation Technician/map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'installation-stages/:refresh',
    loadChildren: () => import('./installation-stages/installation-stages.module').then( m => m.InstallationStagesPageModule)
  },
  {
    path: 'unpaidbills',
    loadChildren: () => import('./Admin Roles/Installation Manager/unpaidbills/unpaidbills.module').then( m => m.UnpaidbillsPageModule)
  },
  {
    path: 'paidbills',
    loadChildren: () => import('./Admin Roles/Installation Manager/paidbills/paidbills.module').then( m => m.PaidbillsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'detailed-solved-malfunctions',
    loadChildren: () => import('./detailed-solved-malfunctions/detailed-solved-malfunctions.module').then( m => m.DetailedSolvedMalfunctionsPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./Admin Roles/Installation Manager/menu/menu.module').then( m => m.MenuPageModule)
  },
  // {
  //   path: 'tabs',
  //   loadChildren: () => import('./Admin Roles/Installation Manager/tabs/tabs.module').then( m => m.TabsPageModule)
  // },
  {
    path: 'installation-manager-tabs',
    loadChildren: () => import('./installation-manager-tabs/installation-manager-tabs.module').then( m => m.InstallationManagerTabsPageModule)
  },
  {
    path: 'currentmalfunctionslist',
    loadChildren: () => import('./Admin Roles/Installation Manager/currentmalfunctionslist/currentmalfunctionslist.module').then( m => m.CurrentmalfunctionslistPageModule)
  },
  {
    path: 'solvedmalfunctionslist',
    loadChildren: () => import('./Admin Roles/Installation Manager/solvedmalfunctionslist/solvedmalfunctionslist.module').then( m => m.SolvedmalfunctionslistPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'menu-tabs',
    loadChildren: () => import('./menu-tabs/menu-tabs.module').then( m => m.MenuTabsPageModule)
  },
  {
    path: 'top-tabs',
    loadChildren: () => import('./top-tabs/top-tabs.module').then( m => m.TopTabsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'language',
    loadChildren: () => import('./language/language.module').then( m => m.LanguagePageModule)
  },
 ];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
