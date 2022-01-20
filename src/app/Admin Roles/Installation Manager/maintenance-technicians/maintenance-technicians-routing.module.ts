import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceTechniciansPage } from './maintenance-technicians.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceTechniciansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenanceTechniciansPageRoutingModule {}
