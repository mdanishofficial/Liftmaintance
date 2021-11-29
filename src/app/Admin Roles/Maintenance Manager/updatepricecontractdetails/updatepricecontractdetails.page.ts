import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { UpdatepriceModalPage } from '../updateprice-modal/updateprice-modal.page';
@Component({
  selector: 'app-updatepricecontractdetails',
  templateUrl: './updatepricecontractdetails.page.html',
  styleUrls: ['./updatepricecontractdetails.page.scss'],
})
export class UpdatepricecontractdetailsPage implements OnInit {

  constructor(public alertController: AlertController,public modalController: ModalController) {}

  ngOnInit() {
  }
  async updateprice(){
    
    console.log('emod property is accessible')
    const modal = await this.modalController.create({
      component: UpdatepriceModalPage ,
      cssClass: 'updateprice'
    });
    return await modal.present();
  }
}
