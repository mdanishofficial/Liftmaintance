import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StageTwoPage } from './stage-two.page';

const routes: Routes = [
  {
    path: '',
    component: StageTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StageTwoPageRoutingModule {}
