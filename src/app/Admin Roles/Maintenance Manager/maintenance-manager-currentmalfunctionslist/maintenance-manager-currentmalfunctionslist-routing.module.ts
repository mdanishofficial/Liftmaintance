import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceManagerCurrentmalfunctionslistPage } from './maintenance-manager-currentmalfunctionslist.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceManagerCurrentmalfunctionslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenanceManagerCurrentmalfunctionslistPageRoutingModule {}
