import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MalfunctionStatusModalPage } from './malfunction-status-modal.page';

const routes: Routes = [
  {
    path: '',
    component: MalfunctionStatusModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MalfunctionStatusModalPageRoutingModule {}
