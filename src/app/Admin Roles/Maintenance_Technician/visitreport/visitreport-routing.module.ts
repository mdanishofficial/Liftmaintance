import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitreportPage } from './visitreport.page';

const routes: Routes = [
  {
    path: '',
    component: VisitreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitreportPageRoutingModule {}
