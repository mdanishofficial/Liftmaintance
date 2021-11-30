import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenancevisitsunassignedPage } from './maintenancevisitsunassigned.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenancevisitsunassignedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenancevisitsunassignedPageRoutingModule {}
