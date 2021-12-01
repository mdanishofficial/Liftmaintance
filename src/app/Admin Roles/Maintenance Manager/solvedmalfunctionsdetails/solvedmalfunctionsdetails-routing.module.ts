import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolvedmalfunctionsdetailsPage } from './solvedmalfunctionsdetails.page';

const routes: Routes = [
  {
    path: '',
    component: SolvedmalfunctionsdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolvedmalfunctionsdetailsPageRoutingModule {}
