import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'detailed_current_malfunctions',
        loadChildren: () => import('../detailed_current_malfunctions/detailed_current_malfunctions.module').then(m => m.detailed_current_malfunctionsPageModule)
      },
      {
        path: 'detailed_solved_malfunctions',
        loadChildren: () => import('../detailed-solved-malfunctions/detailed-solved-malfunctions.module').then(m => m.DetailedSolvedMalfunctionsPageModule)
      },
      {
        path: 'installation_stages/:refresh',
        loadChildren: () => import('../installation-stages/installation-stages-routing.module').then(m => m.InstallationStagesPageRoutingModule)
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
    path: 'maintenancelist/:refresh',
    loadChildren: () => import('../maintenancelist/maintenancelist.module').then(m => m.MaintenancelistPageModule)
  },
  {
    path: 'malfunctionslist/:refresh',
    loadChildren: () => import('../malfunctionslist/malfunctionslist.module').then(m => m.MalfunctionslistPageModule)
  },
  {
    path: 'currentmalfunctionslist/:refresh',
    loadChildren: () => import('../currentmalfunctions/currentmalfunctions.module').then(m => m.CurrentmalfunctionsPageModule)
  },

  {
    path: 'solvedcomplain/:refresh',
    loadChildren: () => import('../solvedcomplain/solvedcomplain.module').then(m => m.SolvedcomplainPageModule)
  },
  {
    path: 'pendingcomplain/:refresh',
    loadChildren: () => import('../pendingcomplain/pendingcomplain.module').then(m => m.PendingcomplainPageModule)
  },
  {
    path: 'solvedemergencycomplain/:refresh',
    loadChildren: () => import('../solvedemergencycomplain/solvedemergencycomplain.module').then(m => m.SolvedemergencycomplainPageModule)
  },
  {
    path: 'pendingemergencycomplain/:refresh',
    loadChildren: () => import('../pendingemergencycomplain/pendingemergencycomplain.module').then(m => m.Pendingemergencycomplain)
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
    path: 'unpaidbills/:refresh',
    loadChildren: () => import('../unpaidbills/unpaidbills.module').then(m => m.UnpaidbillsPageModule)
  },
  {
    path: 'paidbills/:refresh',
    loadChildren: () => import('../paidbills/paidbills.module').then(m => m.PaidbillsPageModule)
  },
  {
    path: 'billdetails',
    loadChildren: () => import('../billdetails/billdetails.module').then(m => m.BilldetailsPageModule)
  },
  {
    path: 'visitdetails/:id',
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
  {
    path: 'notifications',
    loadChildren: () => import('../notifications/notifications.module').then(m => m.NotificationsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'contact_us',
    loadChildren: () => import('../contact-us/contact-us.module').then(m => m.ContactUsPageModule)
  },
  {
    path: 'language',
    loadChildren: () => import('../language/language.module').then(m => m.LanguagePageModule)
  },
  {
    path: 'contract_details',
    loadChildren: () => import('../contract-details/contract-details.module').then(m => m.ContractDetailsPageModule)
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
    path: 'adminroles/maintenancemanager/datepicker-maintenance-visits',
    loadChildren: () => import('../Admin Roles/Maintenance Manager/datepicker-maintenance-visits/datepicker-maintenance-visits.module').then(m => m.DatepickerMaintenanceVisitsPageModule)
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
    path: 'adminroles/maintenancemanager/myteam-maintenance-technicians',
    loadChildren: () => import('../Admin Roles/Maintenance Manager/myteam-maintenance-technicians/myteam-maintenance-technicians.module').then(m => m.MyteamMaintenanceTechniciansPageModule)
  },
  {
    path: 'adminroles/maintenancemanager/myteam-repair-technicians',
    loadChildren: () => import('../Admin Roles/Maintenance Manager/myteam-repair-technicians/myteam-repair-technicians.module').then(m => m.MyteamRepairTechniciansPageModule)
  },
 
  {
    path: 'adminroles/Mobile_Supervisor/contracts',
    loadChildren: () => import('../Admin Roles/Mobile_Supervisor/contracts/contracts.module').then(m => m.ContractsPageModule)
  },
  {
    path: 'adminroles/Mobile_Supervisor/curmonthexpiring',
    loadChildren: () => import('../Admin Roles/Mobile_Supervisor/curmonthexpiring/curmonthexpiring.module').then(m => m.CurmonthexpiringPageModule)
  },
  {
    path: 'adminroles/Mobile_Supervisor/expired',
    loadChildren: () => import('../Admin Roles/Mobile_Supervisor/expired/expired.module').then(m => m.ExpiredPageModule)
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
    path: 'adminroles/maintenancemanager/solvedmalfunctionsdetails',
    loadChildren: () => import('../Admin Roles/Maintenance Manager/solvedmalfunctionsdetails/solvedmalfunctionsdetails.module').then(m => m.SolvedmalfunctionsdetailsPageModule)
  },
  // Maintenance Technician
  {
    path: 'adminroles/maintenancetechnician/menu',
    loadChildren: () => import('../Admin Roles/Maintenance_Technician/menu/menu.module').then(m => m.MenuPageModule)
  },
  {
    path: 'adminroles/maintenancetechnician/todaysvisits',
    loadChildren: () => import('../Admin Roles/Maintenance_Technician/todaysvisits/todaysvisits.module').then(m => m.TodaysvisitsPageModule)
  },
  {
    path: 'adminroles/maintenancetechnician/upcomingvisits',
    loadChildren: () => import('../Admin Roles/Maintenance_Technician/upcomingvisits/upcomingvisits.module').then(m => m.UpcomingvisitsPageModule)
  },
  {
    path: 'adminroles/maintenancetechnician/previousvisits',
    loadChildren: () => import('../Admin Roles/Maintenance_Technician/previousvisits/previousvisits.module').then(m => m.PreviousvisitsPageModule)
  },
  {
    path: 'adminroles/maintenancetechnician/clientdetails',
    loadChildren: () => import('../Admin Roles/Maintenance_Technician/clientdetails/clientdetails.module').then(m => m.ClientdetailsPageModule)
  },
  {
    path: 'adminroles/maintenancetechnician/visitreport',
    loadChildren: () => import('../Admin Roles/Maintenance_Technician/visitreport/visitreport.module').then(m => m.VisitreportPageModule)
  },
  {
    path: 'adminroles/maintenancetechnician/previousreports',
    loadChildren: () => import('../Admin Roles/Maintenance_Technician/previousreports/previousreports.module').then(m => m.PreviousreportsPageModule)
  },
  {
    path: 'adminroles/maintenancetechnician/liftdetail',
    loadChildren: () => import('../Admin Roles/Maintenance_Technician/liftdetail/liftdetail.module').then(m => m.LiftdetailPageModule)
  },
  {
    path: 'adminroles/maintenancetechnician/clientliftdetail',
    loadChildren: () => import('../Admin Roles/Maintenance_Technician//clientliftdetails/clientliftdetails.module').then(m => m.ClientliftdetailsPageModule)
  },
  // Maintenance Repair Technician
  {
    path: 'adminroles/maintenancerepairtechnician/menu',
    loadChildren: () => import('../Admin Roles/Maintenance_Repair_Technician/menu/menu.module').then(m => m.MenuPageModule)
  },
  {
    path: 'adminroles/installationtechnician/newmalfunctions',
    loadChildren: () => import('../Admin Roles/Installation Technician/newmalfunctions/newmalfunctions.module').then(m => m.NewmalfunctionsPageModule)
  },
  {
    path: 'adminroles/installationtechnician/completedmalfunctions',
    loadChildren: () => import('../Admin Roles/Installation Technician/completedmalfunctions/completedmalfunctions.module').then(m => m.CompletedmalfunctionsPageModule)
  },
  {
    path: 'adminroles/installationtechnician/maintenance_malfunction_detail_update',
    loadChildren: () => import('../Admin Roles/Installation Technician/maintenance-malfunction-detail-update/maintenance-malfunction-detail-update.module').then(m => m.MaintenanceMalfunctionDetailUpdatePageModule)
  },
  {
    path: 'adminroles/installationtechnician/maintenance_malfunction_detail_view',
    loadChildren: () => import('../Admin Roles/Installation Technician/maintenance-malfunction-detail-view/maintenance-malfunction-detail-view.module').then(m => m.MaintenanceMalfunctionDetailViewPageModule)
  },
  //installation manager tab
  {
    path: 'adminroles/installationmanager/menu',
    loadChildren: () => import('../Admin Roles/Installation Manager/menu/menu.module').then(m => m.MenuPageModule)
  },  
  {
    path: 'adminroles/installationmanager/installation',
    loadChildren: () => import('../Admin Roles/Installation Manager/installation-page/installation-page.module').then(m => m.InstallationPagePageModule)
  },  
  {
    path: 'adminroles/installationmanager/installationstage',
    loadChildren: () => import('../Admin Roles/Installation Manager/installation-stage/installation-stage.module').then(m => m.InstallationStagePageModule)
  },  
  {
    path: 'adminroles/installationmanager/unpaidbills',
    loadChildren: () => import('../Admin Roles/Installation Manager/unpaidbills/unpaidbills.module').then(m => m.UnpaidbillsPageModule)
  },  
  {
    path: 'adminroles/installationmanager/paidbills',
    loadChildren: () => import('../Admin Roles/Installation Manager/paidbills/paidbills.module').then(m => m.PaidbillsPageModule)
  }, 
  {
    path: 'adminroles/installationtechnician/taskdetails',
    loadChildren: () => import('../Admin Roles/Installation Technician/task-details/task-details.module').then(m => m.TaskDetailsPageModule)
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
    redirectTo: '/tabs/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
