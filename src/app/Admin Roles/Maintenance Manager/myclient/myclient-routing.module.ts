import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyclientPage } from './myclient.page';

const routes: Routes = [
  {
    path: '',
    component: MyclientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyclientPageRoutingModule {}
