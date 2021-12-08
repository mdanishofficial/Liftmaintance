import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceMalfunctionDetailUpdatePage } from './maintenance-malfunction-detail-update.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceMalfunctionDetailUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenanceMalfunctionDetailUpdatePageRoutingModule {}
