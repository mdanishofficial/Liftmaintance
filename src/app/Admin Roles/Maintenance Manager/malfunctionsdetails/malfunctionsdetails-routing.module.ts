import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MalfunctionsdetailsPage } from './malfunctionsdetails.page';

const routes: Routes = [
  {
    path: '',
    component: MalfunctionsdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MalfunctionsdetailsPageRoutingModule {}
