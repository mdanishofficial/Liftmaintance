import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnpaidbillsPage } from './unpaidbills.page';

const routes: Routes = [
  {
    path: '',
    component: UnpaidbillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnpaidbillsPageRoutingModule {}
