import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IonicModule } from '@ionic/angular';

import { DatepickerMaintenanceVisitsPageRoutingModule } from './datepicker-maintenance-visits-routing.module';
import { DatepickerMaintenanceVisitsPage } from './datepicker-maintenance-visits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatepickerMaintenanceVisitsPageRoutingModule,
    NgbModule
  ],
  declarations: [DatepickerMaintenanceVisitsPage],
  bootstrap: [DatepickerMaintenanceVisitsPage]
})
export class DatepickerMaintenanceVisitsPageModule {}
