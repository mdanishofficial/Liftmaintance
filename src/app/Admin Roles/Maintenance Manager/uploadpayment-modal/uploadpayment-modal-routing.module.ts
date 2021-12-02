import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadpaymentModalPage } from './uploadpayment-modal.page';

const routes: Routes = [
  {
    path: '',
    component: UploadpaymentModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadpaymentModalPageRoutingModule {}
