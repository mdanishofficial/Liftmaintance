import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatebillModalPage } from './updatebill-modal.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatebillModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatebillModalPageRoutingModule {}
