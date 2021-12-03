import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiftdetailPage } from './liftdetail.page';

const routes: Routes = [
  {
    path: '',
    component: LiftdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiftdetailPageRoutingModule {}
