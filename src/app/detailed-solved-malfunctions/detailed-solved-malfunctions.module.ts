import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetailedSolvedMalfunctionsPageRoutingModule } from './detailed-solved-malfunctions-routing.module';
import { StarRatingModule } from 'ionic5-star-rating';
import { DetailedSolvedMalfunctionsPage } from './detailed-solved-malfunctions.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    IonicModule,
    DetailedSolvedMalfunctionsPageRoutingModule,
    StarRatingModule
  ],
  declarations: [DetailedSolvedMalfunctionsPage],
  schemas:[NO_ERRORS_SCHEMA]
})
export class DetailedSolvedMalfunctionsPageModule {}
