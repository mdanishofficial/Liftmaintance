import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashModalPage } from './cash-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CashModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CashModalPageRoutingModule {}
