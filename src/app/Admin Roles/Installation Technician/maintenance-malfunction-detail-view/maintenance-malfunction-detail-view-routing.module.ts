import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceMalfunctionDetailViewPage } from './maintenance-malfunction-detail-view.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceMalfunctionDetailViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenanceMalfunctionDetailViewPageRoutingModule {}
