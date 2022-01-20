import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RailanddoorStagePage } from './railanddoor-stage.page';

const routes: Routes = [
  {
    path: '',
    component: RailanddoorStagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RailanddoorStagePageRoutingModule {}
