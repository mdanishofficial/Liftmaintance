import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitdetailsPage } from './visitdetails.page';

const routes: Routes = [
  {
    path: '',
    component: VisitdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitdetailsPageRoutingModule {}
