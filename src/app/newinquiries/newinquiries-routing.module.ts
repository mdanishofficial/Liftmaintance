import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewinquiriesPage } from './newinquiries.page';

const routes: Routes = [
  {
    path: '',
    component: NewinquiriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewinquiriesPageRoutingModule {}
