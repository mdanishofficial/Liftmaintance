import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProvidedPartsModalPage } from './provided-parts-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ProvidedPartsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProvidedPartsModalPageRoutingModule {}
