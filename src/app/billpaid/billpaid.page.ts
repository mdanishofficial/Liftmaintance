import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ModalPagePage } from '../modal-page/modal-page.page';
import { PartsModalPage } from '../parts-modal/parts-modal.page';
import {RatingsModalPage } from '../ratings-modal/ratings-modal.page';
@Component({
  selector: 'app-billpaid',
  templateUrl: './billpaid.page.html',
  styleUrls: ['./billpaid.page.scss'],
})
export class BillpaidPage implements OnInit {

  constructor(public alertController: AlertController,public modalController: ModalController) { }

  ngOnInit() {
  }
  logRatingChange(rating){
    console.log("changed rating: ",rating);
    // do your stuff
    }
    async presentAlertParts() {
      console.log('emod property is accessible')
      const modal = await this.modalController.create({
        component: PartsModalPage ,
        cssClass: 'parts-class'
      });
      return await modal.present();
    }
    async presentModalPayment() {
      console.log('emod property is accessible')
      const modal = await this.modalController.create({
        component: ModalPagePage ,
        cssClass: 'payment-class'
      });
      return await modal.present();
    }
    async presentModalRatings() {
      console.log('emod property is accessible')
      const modal = await this.modalController.create({
        component: RatingsModalPage ,
        cssClass: 'ratings-class'
      });
      return await modal.present();
    }
}
