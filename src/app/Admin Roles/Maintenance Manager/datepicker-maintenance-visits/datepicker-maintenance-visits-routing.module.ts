import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatepickerMaintenanceVisitsPage } from './datepicker-maintenance-visits.page';

const routes: Routes = [
  {
    path: '',
    component: DatepickerMaintenanceVisitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatepickerMaintenanceVisitsPageRoutingModule {}
