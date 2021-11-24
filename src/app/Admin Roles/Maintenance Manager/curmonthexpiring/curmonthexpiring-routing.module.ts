import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurmonthexpiringPage } from './curmonthexpiring.page';

const routes: Routes = [
  {
    path: '',
    component: CurmonthexpiringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurmonthexpiringPageRoutingModule {}
