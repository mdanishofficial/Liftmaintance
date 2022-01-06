import { Component, OnInit } from '@angular/core';
// slides.component.ts
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { paynow_modalPage } from '../paynow_modal/paynow-modal.page';
import { PartsModalPage } from '../parts-modal/parts-modal.page';
import { InstallationService } from '../../services/main.service';
import { Router } from "@angular/router";
import { Platform } from '@ionic/angular';
import jwt_decode from "jwt-decode";
import { RatingsModalPage } from '../ratings-modal/ratings-modal.page';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detailed-solved-malfunctions',
  templateUrl: './detailed-solved-malfunctions.page.html',
  styleUrls: ['./detailed-solved-malfunctions.page.scss'],
})
export class DetailedSolvedMalfunctionsPage implements OnInit {
  constructor(public activatedRoute: ActivatedRoute, private platform: Platform, private service: InstallationService, public alertController: AlertController, public modalController: ModalController, private router: Router) {
    this.call_api()
  }
  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
    });
  }
  sub
  id
  malfunction_data = []
  technician_data = []
  malfunction_danger_level = []
  parts_data = []
  sum = 0;
  logRatingChange(rating) {
    console.log("changed rating: ", rating);
    // do your stuff
  }
  call_api(){
    this.platform.backButton.subscribeWithPriority(10, () => {
      var refresh=true
      this.router.navigateByUrl('tabs/currentmalfunctionslist/'+refresh);
    });
    var decoded: any = {}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
    let payload = {
      user_id: decoded.user_id,
    }
    this.service.getsolvedmalfunctions(payload).subscribe(res => {
      this.malfunction_data = res;
      console.log(this.malfunction_data)
    })
    this.service.getmalfunctiondangerlevelsolved(payload).subscribe(res => {
      for(var i=0;i<res.length;i++){
        this.malfunction_danger_level.push(res[i])
      }
      console.log(res)
      console.log('this.malfunction_data[0].malfunction_danger_level')
    })
    this.service.getrating(payload).subscribe(res => {
      this.technician_data = res;
    })
    var price = [];
    this.service.getparts(payload).subscribe(res => {
      for (var i = 0; i < res.length; i++) {
        this.parts_data.push(res[i])
        price[i] = parseInt(this.parts_data[i].part_price)
      }
      for (var i = 0; i < price.length; i++) {
        this.sum = this.sum + price[i]
      }
      console.log(this.sum)
    })
  }
  // async presentAlertParts() {
  //   console.log('emod property is accessible')
  //   const modal = await this.modalController.create({
  //     component: PartsModalPage,
  //     cssClass: 'parts-class'
  //   });
  //   modal.onDidDismiss().then((data) => {
  //     var price = [];
  //      // this.call_api()
  //      this.parts_data=[]
  //      this.sum=0
  //      var decoded: any = {}
  //      var retrievedtoken = localStorage.getItem('token') || ""
  //      decoded = jwt_decode(retrievedtoken);
  //      let payload = {
  //        user_id: decoded.user_id,
  //      }
  //      setTimeout(()=>{
  //        this.service.getparts(payload).subscribe(res => {
  //          for (var i = 0; i < res.length; i++) {
  //            this.parts_data.push(res[i])
  //            price[i] = parseInt(this.parts_data[i].part_price)
  //          }
  //          console.log(res)
  //          console.log('this.parts_data')
  //          for (var i = 0; i < price.length; i++) {
  //            this.sum = this.sum + price[i]
  //          }
  //          console.log(this.sum)
  //        })
  //    }, 300);
    
  //   });
  //   return await modal.present();
  // }
  // async presentModalPayment() {
  //   console.log('emod property is accessible')
  //   const modal = await this.modalController.create({
  //     component: paynow_modalPage,
  //     cssClass: 'payment-class'
  //   });
  //   return await modal.present();
  // }
  // async presentModalRatings() {
  //   console.log('emod property is accessible')
  //   const modal = await this.modalController.create({
  //     component: RatingsModalPage,
  //     cssClass: 'ratings-class'
  //   });
  //   return await modal.present();
  // }


}
