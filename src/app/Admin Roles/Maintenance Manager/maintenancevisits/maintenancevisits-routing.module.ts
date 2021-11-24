import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenancevisitsPage } from './maintenancevisits.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenancevisitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenancevisitsPageRoutingModule {}
