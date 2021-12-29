import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaidbillsPage } from './paidbills.page';

const routes: Routes = [
  {
    path: '',
    component: PaidbillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaidbillsPageRoutingModule {}
