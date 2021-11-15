import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MalfunctionslistPage } from './malfunctionslist.page';

const routes: Routes = [
  {
    path: '',
    component: MalfunctionslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MalfunctionslistPageRoutingModule {}
