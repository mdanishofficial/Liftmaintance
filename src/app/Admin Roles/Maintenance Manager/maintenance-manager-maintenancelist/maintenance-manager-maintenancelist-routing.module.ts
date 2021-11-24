import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceManagerMaintenancelistPage } from './maintenance-manager-maintenancelist.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceManagerMaintenancelistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenanceManagerMaintenancelistPageRoutingModule {}
