import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {BanktransferModalPage } from '../banktransfer-modal/banktransfer-modal.page';
import {PosModalPage } from '../pos-modal/pos-modal.page';
import { InstallationService } from '../../services/main.service';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-paynow_modal',
  templateUrl: './paynow_modal.page.html',
  styleUrls: ['./paynow_modal.page.scss'],
})
export class paynow_modalPage implements OnInit {

  constructor(private platform: Platform,private service: InstallationService,private router: Router,public modalController: ModalController) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.modalController.dismiss({
        'dismissed': true
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

