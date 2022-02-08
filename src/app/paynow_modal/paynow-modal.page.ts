import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import {BanktransferModalPage } from '../banktransfer-modal/banktransfer-modal.page';
import {CashModalPage } from '../cash-modal/cash-modal.page';
import {PosModalPage } from '../pos-modal/pos-modal.page';
import { InstallationService } from '../../services/main.service';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
// import { Stripe } from '@awesome-cordova-plugins/stripe/ngx';
// import { StripeJavaScriptPage } from '../stripe-java-script/stripe-java-script.page';
import { Stripe } from '@awesome-cordova-plugins/stripe/ngx';

@Component({
  selector: 'app-paynow_modal',
  templateUrl: './paynow_modal.page.html',
  styleUrls: ['./paynow_modal.page.scss'],
})
export class paynow_modalPage implements OnInit {

  constructor(private stripe: Stripe,private platform: Platform,private service: InstallationService,private router: Router,public modalController: ModalController) {
    
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.modalController.dismiss({
        'dismissed': true
      }).then((data) => {
        console.log('In Modaaaaaal')
       var refresh = true // Here's your selected user!
       this.router.navigateByUrl('detailed_current_malfunctions'+refresh);
   });
    });
   }

  ngOnInit() {
    
  }
  
  dismiss() {
   console.log('Modal Dismissed!!!!!!!!!!!!')
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  
  async banktransfer(){
    console.log('emod property is accessible')
    const modal = await this.modalController.create({
      component: BanktransferModalPage ,
      cssClass: 'parts-class'
    });
    return await modal.present();
  }
  radioValue;
  radioGroupChange(e){
   
    console.log(e.detail.value)
    this.radioValue=e.detail.value
  }
async buttonClick(){
  if(this.radioValue=='banktransfer'){
    console.log('banktransfer property is accessible')
    this.modalController.dismiss({
      'dismissed': true
    });
    const modal = await this.modalController.create({
      component: BanktransferModalPage ,
      cssClass: 'parts-class'
    });
    modal.onDidDismiss().then((data) => {
      this.platform.backButton.subscribeWithPriority(10, () => {
        var refresh=true
        this.router.navigateByUrl('tabs/currentmalfunctionslist/'+refresh);
      });
    });
    return await modal.present();
  }
  if(this.radioValue=='pos'){
    console.log('pos property is accessible')
    this.modalController.dismiss({
      'dismissed': true
    });
    const modal = await this.modalController.create({
      component: PosModalPage ,
      cssClass: 'parts-class'
    });
    return await modal.present();
    // this.modalController.dismiss()
  }

  // if(this.radioValue=='creditcard'){
  //   this.stripe.setPublishableKey('pk_test_51KOyLXA1k9SVF7HQ6arkRw0seToLzFtZ7J4Wq6MV9UgLmcTeCjh1k4fGYN7Ysq0jenZD7xYG94pyHexAoc0Nm3yC0074F9eiVN');
  //   let card = {
  //     number: '4242424242424242',
  //     expMonth: 12,
  //     expYear: 2024,
  //     cvc: '220'
  //    }
     
  //    this.stripe.createCardToken(card)
  //       .then(token => console.log(token.id))
  //       .catch(error => console.error(error));
  //   this.modalController.dismiss()
  // }
  if(this.radioValue=='cash'){
    console.log('banktransfer property is accessible')
    this.modalController.dismiss({
      'dismissed': true
    });
    const modal = await this.modalController.create({
      component: CashModalPage ,
      cssClass: 'parts-class'
    });
    modal.onDidDismiss().then((data) => {
      this.platform.backButton.subscribeWithPriority(10, () => {
        var refresh=true
        this.router.navigateByUrl('tabs/currentmalfunctionslist/'+refresh);
      });
    });
    return await modal.present();
  }
}
    // if(e.detail.value=='credic'){
    //   this.router.navigate(doocardmodal)
    // }
    // if(e.detail.value=='gallon'){
    //   this.router.navigate(gallonmodal)
    // }
    // if(e.detail.value=='doorfork'){
    //   this.router.navigate(doorfrok)
    // }
   }

