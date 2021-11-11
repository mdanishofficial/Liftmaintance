import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BanktransferModalPage } from './banktransfer-modal.page';

const routes: Routes = [
  {
    path: '',
    component: BanktransferModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BanktransferModalPageRoutingModule {}
