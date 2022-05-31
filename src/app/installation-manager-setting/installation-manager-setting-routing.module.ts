import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstallationManagerSettingPage } from './installation-manager-setting.page';

const routes: Routes = [
  {
    path: '',
    component: InstallationManagerSettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstallationManagerSettingPageRoutingModule {}
