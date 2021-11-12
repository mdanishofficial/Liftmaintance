import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControldeliveryPage } from './controldelivery.page';

const routes: Routes = [
  {
    path: '',
    component: ControldeliveryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControldeliveryPageRoutingModule {}
