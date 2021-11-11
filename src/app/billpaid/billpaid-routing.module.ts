import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillpaidPage } from './billpaid.page';

const routes: Routes = [
  {
    path: '',
    component: BillpaidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillpaidPageRoutingModule {}
