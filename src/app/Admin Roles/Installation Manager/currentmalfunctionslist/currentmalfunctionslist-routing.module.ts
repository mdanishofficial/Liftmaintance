import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentmalfunctionslistPage } from './currentmalfunctionslist.page';

const routes: Routes = [
  {
    path: '',
    component: CurrentmalfunctionslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentmalfunctionslistPageRoutingModule {}
