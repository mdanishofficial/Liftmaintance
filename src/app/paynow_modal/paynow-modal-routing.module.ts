import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { paynow_modalPage } from './paynow-modal.page';

const routes: Routes = [
  {
    path: '',
    component: paynow_modalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class paynow_modalPageRoutingModule {}
