import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { UpdatepaymentModalPage } from '../updatepayment-modal/updatepayment-modal.page';
@Component({
  selector: 'app-installation-page',
  templateUrl: './installation-page.page.html',
  styleUrls: ['./installation-page.page.scss'],
})
export class InstallationPagePage implements OnInit {

  constructor(public alertController: AlertController,public modalController: ModalController) {}

  ngOnInit() {
  }
async update(){
  const modal = await this.modalController.create({
    component: UpdatepaymentModalPage ,
    cssClass: 'malfunctiontype'
  });
  return await modal.present();
}
}
