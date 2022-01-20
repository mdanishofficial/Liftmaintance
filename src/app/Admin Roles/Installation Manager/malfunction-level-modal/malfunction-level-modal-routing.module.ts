import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MalfunctionLevelModalPage } from './malfunction-level-modal.page';

const routes: Routes = [
  {
    path: '',
    component: MalfunctionLevelModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MalfunctionLevelModalPageRoutingModule {}
