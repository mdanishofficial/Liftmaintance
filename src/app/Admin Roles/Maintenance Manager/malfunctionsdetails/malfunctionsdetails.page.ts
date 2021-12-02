import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { MalfunctionTypeModalPage } from '../malfunction-type-modal/malfunction-type-modal.page';
import { MalfunctionLevelModalPage } from '../malfunction-level-modal/malfunction-level-modal.page';
import { MalfunctionStatusModalPage } from '../malfunction-status-modal/malfunction-status-modal.page';
import { IssuebillmodalPage } from '../issuebillmodal/issuebillmodal.page';
import { UploadpaymentModalPage } from '../uploadpayment-modal/uploadpayment-modal.page';
import { ForwardmalfunctionsModalPage } from '../forwardmalfunctions-modal/forwardmalfunctions-modal.page';
@Component({
  selector: 'app-malfunctionsdetails',
  templateUrl: './malfunctionsdetails.page.html',
  styleUrls: ['./malfunctionsdetails.page.scss'],
})
export class MalfunctionsdetailsPage implements OnInit {

  constructor(public alertController: AlertController,public modalController: ModalController) {}

  ngOnInit() {
  }
async malfunctiontypemodal(){
  console.log('emod property is accessible')
  const modal = await this.modalController.create({
    component: MalfunctionTypeModalPage ,
    cssClass: 'malfunctiontype'
  });
  return await modal.present();
}
async malfunctionlevelmodal(){
  console.log('emod property is accessible')
  const modal = await this.modalController.create({
    component: MalfunctionLevelModalPage ,
    cssClass: 'malfunctionlevel'
  });
  return await modal.present();
}
async malfunctionstatusmodal(){
  console.log('emod property is accessible')
  const modal = await this.modalController.create({
    component: MalfunctionStatusModalPage ,
    cssClass: 'malfunctionstatus'
  });
  return await modal.present();
}
async newbillmodal(){
  console.log('emod property is accessible')
  const modal = await this.modalController.create({
    component: IssuebillmodalPage ,
    cssClass: 'issuebill'
  });
  return await modal.present();
}
async forwardmodal(){
  console.log('emod property is accessible')
  const modal = await this.modalController.create({
    component: ForwardmalfunctionsModalPage,
    cssClass: 'forwardmodal'
  });
  return await modal.present();
}
async uploadpaymentmodal(){
  console.log('emod property is accessible')
  const modal = await this.modalController.create({
    component: UploadpaymentModalPage,
    cssClass: 'uploadpayment'
  });
  return await modal.present();
}
}
