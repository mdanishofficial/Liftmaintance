import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstallationStagesDetailsPage } from './installation-stages-details.page';

const routes: Routes = [
  {
    path: '',
    component: InstallationStagesDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstallationStagesDetailsPageRoutingModule {}
