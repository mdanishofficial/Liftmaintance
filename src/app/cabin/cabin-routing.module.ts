import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CabinPage } from './cabin.page';

const routes: Routes = [
  {
    path: '',
    component: CabinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CabinPageRoutingModule {}
