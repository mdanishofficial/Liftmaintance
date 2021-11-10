import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RatingsModalPage } from './ratings-modal.page';

const routes: Routes = [
  {
    path: '',
    component: RatingsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RatingsModalPageRoutingModule {}
