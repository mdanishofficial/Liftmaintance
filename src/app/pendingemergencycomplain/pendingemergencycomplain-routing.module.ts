import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendingemergencycomplainPage } from './pendingemergencycomplain.page';

const routes: Routes = [
  {
    path: '',
    component: PendingemergencycomplainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendingemergencycomplainRoutingModule {}
