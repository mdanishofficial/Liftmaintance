import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForwardmalfunctionsModalPage } from './forwardmalfunctions-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ForwardmalfunctionsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForwardmalfunctionsModalPageRoutingModule {}
