import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolvedmalfunctionslistPage } from './solvedmalfunctionslist.page';

const routes: Routes = [
  {
    path: '',
    component: SolvedmalfunctionslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolvedmalfunctionslistPageRoutingModule {}
