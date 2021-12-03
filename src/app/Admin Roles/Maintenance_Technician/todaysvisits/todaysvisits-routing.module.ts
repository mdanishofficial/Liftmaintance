import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodaysvisitsPage } from './todaysvisits.page';

const routes: Routes = [
  {
    path: '',
    component: TodaysvisitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodaysvisitsPageRoutingModule {}
