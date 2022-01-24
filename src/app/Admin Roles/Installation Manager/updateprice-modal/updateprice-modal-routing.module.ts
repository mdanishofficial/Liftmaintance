import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatepriceModalPage } from './updateprice-modal.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatepriceModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatepriceModalPageRoutingModule {}
