import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RaildoorPage } from './raildoor.page';

const routes: Routes = [
  {
    path: '',
    component: RaildoorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RaildoorPageRoutingModule {}
