import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewemergencycomplainPage } from './newemergencycomplain.page';

const routes: Routes = [
  {
    path: '',
    component: NewemergencycomplainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewemergencycomplainPageRoutingModule {}
