import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { detailed_current_malfunctionsPage } from './detailed_current_malfunctions.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { StarRatingModule } from 'ionic5-star-rating';
import { detailed_current_malfunctionsPageRoutingModule } from './detailed_current_malfunctions-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    StarRatingModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: detailed_current_malfunctionsPage }]),
    detailed_current_malfunctionsPageRoutingModule,
  ],
  declarations: [detailed_current_malfunctionsPage],
  schemas:[NO_ERRORS_SCHEMA]
})
export class detailed_current_malfunctionsPageModule {}
