import { Component } from '@angular/core';
// slides.component.ts
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ModalPagePage } from '../modal-page/modal-page.page';
import { PartsModalPage } from '../parts-modal/parts-modal.page';
import {RatingsModalPage } from '../ratings-modal/ratings-modal.page';
// install Swiper modules
// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  
})
export class Tab3Page {

  constructor(public alertController: AlertController,public modalController: ModalController) {}
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
