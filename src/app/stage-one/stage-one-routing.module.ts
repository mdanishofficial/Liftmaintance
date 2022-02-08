import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StageOnePage } from './stage-one.page';

const routes: Routes = [
  {
    path: '',
    component: StageOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StageOnePageRoutingModule {}
