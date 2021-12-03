import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitreportPageRoutingModule } from './visitreport-routing.module';

import { VisitreportPage } from './visitreport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitreportPageRoutingModule
  ],
  declarations: [VisitreportPage]
})
export class VisitreportPageModule {}
