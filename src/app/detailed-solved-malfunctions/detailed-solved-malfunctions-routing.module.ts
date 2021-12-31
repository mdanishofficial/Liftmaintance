import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailedSolvedMalfunctionsPage } from './detailed-solved-malfunctions.page';

const routes: Routes = [
  {
    path: '',
    component: DetailedSolvedMalfunctionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailedSolvedMalfunctionsPageRoutingModule {
  constructor(){}
  onRatingChange(rating){
    console.log('The evaluation was modified and now its value is: ',rating);
    // do your stuff
}
}
