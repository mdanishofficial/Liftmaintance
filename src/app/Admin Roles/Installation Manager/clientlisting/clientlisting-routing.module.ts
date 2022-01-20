import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientlistingPage } from './clientlisting.page';

const routes: Routes = [
  {
    path: '',
    component: ClientlistingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientlistingPageRoutingModule {}
