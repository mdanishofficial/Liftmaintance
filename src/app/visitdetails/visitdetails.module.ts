import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { StarRatingModule } from 'ionic5-star-rating';
import { VisitdetailsPageRoutingModule } from './visitdetails-routing.module';

import { VisitdetailsPage } from './visitdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitdetailsPageRoutingModule,
    StarRatingModule
  ],
  declarations: [VisitdetailsPage]
})
export class VisitdetailsPageModule {}
