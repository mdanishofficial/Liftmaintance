import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientliftdetailsPage } from './clientliftdetails.page';

const routes: Routes = [
  {
    path: '',
    component: ClientliftdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientliftdetailsPageRoutingModule {}
