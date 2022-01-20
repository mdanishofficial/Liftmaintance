import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { UpdatepaymentModalPage } from '../updatepayment-modal/updatepayment-modal.page';
@Component({
  selector: 'app-installation-page',
  templateUrl: './installation-page.page.html',
  styleUrls: ['./installation-page.page.scss'],
})
export class InstallationPagePage implements OnInit {

  constructor(public alertController: AlertController,public modalController: ModalController,private router: Router) {}

  ngOnInit() {
  }
async update(){
  const modal = await this.modalController.create({
    component: UpdatepaymentModalPage ,
    cssClass: 'malfunctiontype'
  });
  return await modal.present();
}
async startstage(){
  this.router.navigateByUrl('installation_manager/installation_stage');
}
}
