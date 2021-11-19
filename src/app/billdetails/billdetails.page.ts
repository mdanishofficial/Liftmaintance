import { Component, OnInit } from '@angular/core';
import { UpdatepaymentModalPage } from '../updatepayment-modal/updatepayment-modal.page';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-billdetails',
  templateUrl: './billdetails.page.html',
  styleUrls: ['./billdetails.page.scss'],
})
export class BilldetailsPage implements OnInit {

  constructor(public alertController: AlertController,public modalController: ModalController) {}

  ngOnInit() {
  }
    async presentModalUpdatePayment(){
    
      console.log('emod property is accessible')
      const modal = await this.modalController.create({
        component: UpdatepaymentModalPage ,
        cssClass: 'updatePayment'
      });
      return await modal.present();
    }
  }

