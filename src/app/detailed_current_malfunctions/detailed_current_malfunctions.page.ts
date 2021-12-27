import { Component } from '@angular/core';
// slides.component.ts
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { paynow_modalPage } from '../paynow_modal/paynow-modal.page';
import { PartsModalPage } from '../parts-modal/parts-modal.page';
import { InstallationService } from '../../services/main.service';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import jwt_decode from "jwt-decode";
import {RatingsModalPage } from '../ratings-modal/ratings-modal.page';
// install Swiper modules
// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-detailed_current_malfunctions',
  templateUrl: 'detailed_current_malfunctions.page.html',
  styleUrls: ['detailed_current_malfunctions.page.scss'],
  
})
export class detailed_current_malfunctionsPage {

  constructor(private platform: Platform,private service: InstallationService,public alertController: AlertController,public modalController: ModalController,private router: Router) {
   
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('tabs/currentmalfunctionslist');
    });
    var decoded:any={}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
    console.log(decoded)
    let payload = {
     user_id:decoded.user_id,
    }
    this.service.getmalfunctions(payload).subscribe(res => {
     this.malfunction_data = res;
          })
       this.service.getrating(payload).subscribe(res => {
        this.technician_data = res;
       })
       var price=[];
      
       this.service.getparts(payload).subscribe(res => {
     for(var i=0;i<res.length;i++){
       this.parts_data.push(res[i])
price[i]=parseInt(this.parts_data[i].part_price)
     }
     for(var i=0;i<price.length;i++){
       this.sum=this.sum+price[i]
     }
     console.log(this.sum)
       })
  }
  malfunction_data = [
    {
      malfunction_date:'2021-09-09',
       },
       {
        technician_assigned:'Huzaifa'
       }
  ]
  technician_data=[]
  parts_data=[]
  sum=0;
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
        component: paynow_modalPage ,
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
