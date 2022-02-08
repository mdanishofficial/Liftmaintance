import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StageThreePage } from './stage-three.page';

const routes: Routes = [
  {
    path: '',
    component: StageThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StageThreePageRoutingModule {}
