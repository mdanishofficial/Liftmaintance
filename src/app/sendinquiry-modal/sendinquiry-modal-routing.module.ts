import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendinquiryModalPage } from './sendinquiry-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SendinquiryModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendinquiryModalPageRoutingModule {}
