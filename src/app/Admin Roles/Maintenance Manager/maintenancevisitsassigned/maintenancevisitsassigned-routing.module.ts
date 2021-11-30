import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenancevisitsassignedPage } from './maintenancevisitsassigned.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenancevisitsassignedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenancevisitsassignedPageRoutingModule {}
