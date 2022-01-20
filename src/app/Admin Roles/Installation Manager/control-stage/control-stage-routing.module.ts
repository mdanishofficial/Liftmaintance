import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControlStagePage } from './control-stage.page';

const routes: Routes = [
  {
    path: '',
    component: ControlStagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControlStagePageRoutingModule {}
