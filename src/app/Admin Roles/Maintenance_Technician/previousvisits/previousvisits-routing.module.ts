import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreviousvisitsPage } from './previousvisits.page';

const routes: Routes = [
  {
    path: '',
    component: PreviousvisitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreviousvisitsPageRoutingModule {}
