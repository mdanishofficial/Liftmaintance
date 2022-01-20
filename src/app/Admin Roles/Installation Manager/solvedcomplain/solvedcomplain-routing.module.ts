import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolvedcomplainPage } from './solvedcomplain.page';

const routes: Routes = [
  {
    path: '',
    component: SolvedcomplainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolvedcomplainPageRoutingModule {}
