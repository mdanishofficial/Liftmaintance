import { Component, OnInit,SimpleChanges } from '@angular/core';
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
// install Swiper modules
// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-detailed_current_malfunctions',
  templateUrl: 'detailed_current_malfunctions.page.html',
  styleUrls: ['detailed_current_malfunctions.page.scss'],

})
export class detailed_current_malfunctionsPage implements OnInit {

  constructor(public activatedRoute: ActivatedRoute, private platform: Platform, private service: InstallationService, public alertController: AlertController, public modalController: ModalController, private router: Router) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      var refresh=true
      this.router.navigateByUrl('tabs/currentmalfunctionslist/'+refresh);
    });
    this.call_api()
//     this.service.listen().subscribe((m:any)=>{
//   console.log(m)
//   // this.call_api()
// })
   }
    malfunction_data = []
  malfunction_danger_level = []
  technician_data = []
  parts_data = []
  sum = 0;
  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
    });
    this.refreshsub = this.activatedRoute.params.subscribe(params => {
      this.refresh = params['refresh'];
      console.log(this.refresh)
      if(this.refresh=='true'){
        console.log('Refresh is True')
        this.call_api()
      }
    });
  }
  refreshsub
  sub
  id
  refresh
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    console.log('changes')
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
    this.service.getmalfunctions(payload).subscribe(res => {
      this.malfunction_data = res;
      console.log(this.malfunction_data)
      console.log('this.malfunction_data')
      // console.log(this.malfunction_data[0].malfunction_danger_level)
    })
    this.service.getmalfunctiondangerlevelunsolved(payload).subscribe(res => {
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
      console.log(res)
      console.log('this.parts_data')
      for (var i = 0; i < price.length; i++) {
        this.sum = this.sum + price[i]
      }
      console.log(this.sum)
    })

  }
  logRatingChange(rating) {
    console.log("changed rating: ", rating);
    // do your stuff
  }
  notifications(){
    this.router.navigateByUrl('tabs/notifications');
  }
  async presentAlertParts() {
    console.log('emod property is accessible')
    const modal = await this.modalController.create({
      component: PartsModalPage,
      cssClass: 'parts-class'
    });
    modal.onDidDismiss().then((data) => {
      this.platform.backButton.subscribeWithPriority(10, () => {
        var refresh=true
        this.router.navigateByUrl('tabs/currentmalfunctionslist/'+refresh);
      });
     var price = [];
      // this.call_api()
      this.parts_data=[]
      this.sum=0
      var decoded: any = {}
      var retrievedtoken = localStorage.getItem('token') || ""
      decoded = jwt_decode(retrievedtoken);
      let payload = {
        user_id: decoded.user_id,
      }
      setTimeout(()=>{
        this.service.getparts(payload).subscribe(res => {
          for (var i = 0; i < res.length; i++) {
            this.parts_data.push(res[i])
            price[i] = parseInt(this.parts_data[i].part_price)
          }
          console.log(res)
          console.log('this.parts_data')
          for (var i = 0; i < price.length; i++) {
            this.sum = this.sum + price[i]
          }
          console.log(this.sum)
        })
    }, 300);
   
   });
    return await modal.present();

  }
  async presentModalPayment() {
    console.log('emod property is accessible')
    const modal = await this.modalController.create({
      component: paynow_modalPage,
      cssClass: 'payment-class'
    });
    modal.onDidDismiss().then((data) => {
      this.platform.backButton.subscribeWithPriority(10, () => {
        var refresh=true
        this.router.navigateByUrl('tabs/currentmalfunctionslist/'+refresh);
      });
    });
    return await modal.present();
  }
  async presentModalRatings() {
    console.log('emod property is accessible')
    const modal = await this.modalController.create({
      component: RatingsModalPage,
      cssClass: 'ratings-class'
    });
    return await modal.present();
  }
  
}
