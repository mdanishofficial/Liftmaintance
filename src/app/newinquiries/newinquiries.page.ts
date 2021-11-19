import { Component, OnInit } from '@angular/core';
import { SendinquiryModalPage } from '../sendinquiry-modal/sendinquiry-modal.page';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-newinquiries',
  templateUrl: './newinquiries.page.html',
  styleUrls: ['./newinquiries.page.scss'],
})
export class NewinquiriesPage implements OnInit {

  constructor(public alertController: AlertController,public modalController: ModalController) {}

  ngOnInit() {
  }
  async presentModalsendInquiry(){
    
    console.log('emod property is accessible')
    const modal = await this.modalController.create({
      component: SendinquiryModalPage ,
      cssClass: 'sendInquiry'
    });
    return await modal.present();
  }
}
