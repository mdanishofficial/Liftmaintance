import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UpdatepaymentModalPage } from '../updatepayment-modal/updatepayment-modal.page';
import {Router} from "@angular/router";
@Component({
  selector: 'app-paidbills',
  templateUrl: './paidbills.page.html',
  styleUrls: ['./paidbills.page.scss'],
})
export class PaidbillsPage implements OnInit {

  constructor(public modalController: ModalController,private router: Router) { }

  ngOnInit() {
  }
  async unpaid(){
    this.router.navigateByUrl('/tabs/unpaidbills');
  }
  async paid(){
    this.router.navigateByUrl('/tabs/paidbills');
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
