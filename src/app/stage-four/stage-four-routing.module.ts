import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StageFourPage } from './stage-four.page';

const routes: Routes = [
  {
    path: '',
    component: StageFourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StageFourPageRoutingModule {}
