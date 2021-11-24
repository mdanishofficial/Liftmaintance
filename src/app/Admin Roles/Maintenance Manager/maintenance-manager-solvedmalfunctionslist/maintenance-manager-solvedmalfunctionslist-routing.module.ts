import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceManagerSolvedmalfunctionslistPage } from './maintenance-manager-solvedmalfunctionslist.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceManagerSolvedmalfunctionslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenanceManagerSolvedmalfunctionslistPageRoutingModule {}
