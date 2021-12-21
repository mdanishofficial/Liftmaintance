import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { detailed_current_malfunctionsPage } from './detailed_current_malfunctions.page';
// import { IonicRatingModule } from 'ionic-rating-component';

const routes: Routes = [
  {
    path: '',
    component: detailed_current_malfunctionsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class detailed_current_malfunctionsPageRoutingModule {
  constructor(){}
  onRatingChange(rating){
    console.log('The evaluation was modified and now its value is: ',rating);
    // do your stuff
}
}
