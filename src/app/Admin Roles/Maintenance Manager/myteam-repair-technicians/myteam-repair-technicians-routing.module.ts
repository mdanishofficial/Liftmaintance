import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyteamRepairTechniciansPage } from './myteam-repair-technicians.page';

const routes: Routes = [
  {
    path: '',
    component: MyteamRepairTechniciansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyteamRepairTechniciansPageRoutingModule {}
