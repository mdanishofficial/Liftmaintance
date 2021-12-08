import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstallationStagePage } from './installation-stage.page';

const routes: Routes = [
  {
    path: '',
    component: InstallationStagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstallationStagePageRoutingModule {}
