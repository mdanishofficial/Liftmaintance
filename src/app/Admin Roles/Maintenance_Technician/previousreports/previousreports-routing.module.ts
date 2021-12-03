import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreviousreportsPage } from './previousreports.page';

const routes: Routes = [
  {
    path: '',
    component: PreviousreportsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreviousreportsPageRoutingModule {}
