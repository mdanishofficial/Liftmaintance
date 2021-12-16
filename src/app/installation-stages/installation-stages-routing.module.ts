import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstallationStagesPage } from './installation-stages.page';

const routes: Routes = [
  {
    path: '',
    component: InstallationStagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule],
})
export class InstallationStagesPageRoutingModule {}
