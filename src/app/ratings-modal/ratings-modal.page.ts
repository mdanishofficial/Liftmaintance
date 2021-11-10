import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ratings-modal',
  templateUrl: './ratings-modal.page.html',
  styleUrls: ['./ratings-modal.page.scss'],
})
export class RatingsModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  logRatingChange(rating){
    console.log("changed rating: ",rating);
    // do your stuff
    }
}
 