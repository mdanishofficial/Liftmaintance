import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepairTechniciansPage } from './repair-technicians.page';

const routes: Routes = [
  {
    path: '',
    component: RepairTechniciansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepairTechniciansPageRoutingModule {}
