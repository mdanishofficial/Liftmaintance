import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatepricecontractdetailsPage } from './updatepricecontractdetails.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatepricecontractdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatepricecontractdetailsPageRoutingModule {}
