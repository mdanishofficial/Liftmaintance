import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpcomingvisitsPage } from './upcomingvisits.page';

const routes: Routes = [
  {
    path: '',
    component: UpcomingvisitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpcomingvisitsPageRoutingModule {}
