import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstallationManagerProfilePage } from './installation-manager-profile.page';

const routes: Routes = [
  {
    path: '',
    component: InstallationManagerProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstallationManagerProfilePageRoutingModule {}
