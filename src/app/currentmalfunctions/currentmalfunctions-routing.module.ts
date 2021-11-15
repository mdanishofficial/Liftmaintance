import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentmalfunctionsPage } from './currentmalfunctions.page';

const routes: Routes = [
  {
    path: '',
    component: CurrentmalfunctionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentmalfunctionsPageRoutingModule {}
