import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewpendingcomplainPage } from './newpendingcomplain.page';

const routes: Routes = [
  {
    path: '',
    component: NewpendingcomplainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewpendingcomplainPageRoutingModule {}
