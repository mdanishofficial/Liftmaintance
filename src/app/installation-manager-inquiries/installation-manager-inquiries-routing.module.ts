import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstallationManagerInquiriesPage } from './installation-manager-inquiries.page';

const routes: Routes = [
  {
    path: '',
    component: InstallationManagerInquiriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstallationManagerInquiriesPageRoutingModule {}
