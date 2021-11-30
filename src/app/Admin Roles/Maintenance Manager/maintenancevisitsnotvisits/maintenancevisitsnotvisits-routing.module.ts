import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaintenancevisitsnotvisitsPage } from './maintenancevisitsnotvisits.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenancevisitsnotvisitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenancevisitsnotvisitsPageRoutingModule {}
