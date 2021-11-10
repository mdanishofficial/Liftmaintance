import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RatingsModalPageRoutingModule } from './ratings-modal-routing.module';
import { StarRatingModule } from 'ionic5-star-rating';
import { RatingsModalPage } from './ratings-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RatingsModalPageRoutingModule,
    StarRatingModule
  ],
  declarations: [RatingsModalPage]
})
export class RatingsModalPageModule {}
