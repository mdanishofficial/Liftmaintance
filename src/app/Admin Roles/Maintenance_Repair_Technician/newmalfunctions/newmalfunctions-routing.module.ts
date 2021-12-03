import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewmalfunctionsPage } from './newmalfunctions.page';

const routes: Routes = [
  {
    path: '',
    component: NewmalfunctionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewmalfunctionsPageRoutingModule {}
