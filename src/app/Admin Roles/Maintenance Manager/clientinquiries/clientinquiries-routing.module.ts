import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientinquiriesPage } from './clientinquiries.page';

const routes: Routes = [
  {
    path: '',
    component: ClientinquiriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientinquiriesPageRoutingModule {}
