import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineStagePage } from './engine-stage.page';

const routes: Routes = [
  {
    path: '',
    component: EngineStagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineStagePageRoutingModule {}
