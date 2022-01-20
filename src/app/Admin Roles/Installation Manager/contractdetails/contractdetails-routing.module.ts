import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContractdetailsPage } from './contractdetails.page';

const routes: Routes = [
  {
    path: '',
    component: ContractdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContractdetailsPageRoutingModule {}
