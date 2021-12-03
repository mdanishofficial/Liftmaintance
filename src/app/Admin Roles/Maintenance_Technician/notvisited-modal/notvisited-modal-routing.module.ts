import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotvisitedModalPage } from './notvisited-modal.page';

const routes: Routes = [
  {
    path: '',
    component: NotvisitedModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotvisitedModalPageRoutingModule {}
