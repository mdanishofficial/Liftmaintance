import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyteamMaintenanceTechniciansPage } from './myteam-maintenance-technicians.page';

const routes: Routes = [
  {
    path: '',
    component: MyteamMaintenanceTechniciansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyteamMaintenanceTechniciansPageRoutingModule {}
