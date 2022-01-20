import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiftcarStagePage } from './liftcar-stage.page';

const routes: Routes = [
  {
    path: '',
    component: LiftcarStagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiftcarStagePageRoutingModule {}
