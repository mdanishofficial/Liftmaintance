import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartsModalPage } from './parts-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PartsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartsModalPageRoutingModule {}
