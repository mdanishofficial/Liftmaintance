import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendingcomplainPage } from './pendingcomplain.page';

const routes: Routes = [
  {
    path: '',
    component: PendingcomplainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendingcomplainPageRoutingModule {}
