import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstallationManagerLanguagePage } from './installation-manager-language.page';

const routes: Routes = [
  {
    path: '',
    component: InstallationManagerLanguagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstallationManagerLanguagePageRoutingModule {}
