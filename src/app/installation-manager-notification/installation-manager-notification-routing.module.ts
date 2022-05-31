import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstallationManagerNotificationPage } from './installation-manager-notification.page';

const routes: Routes = [
  {
    path: '',
    component: InstallationManagerNotificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstallationManagerNotificationPageRoutingModule {}
