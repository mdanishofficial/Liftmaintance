import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BilldetailsPage } from './billdetails.page';

const routes: Routes = [
  {
    path: '',
    component: BilldetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BilldetailsPageRoutingModule {}
