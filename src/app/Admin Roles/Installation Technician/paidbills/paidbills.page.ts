import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UpdatepaymentModalPage } from '../../../updatepayment-modal/updatepayment-modal.page';
import { InstallationService } from '../../../../services/main.service';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-paidbills',
  templateUrl: './paidbills.page.html',
  styleUrls: ['./paidbills.page.scss'],
})
export class PaidbillsPage implements OnInit {

  constructor(private platform: Platform,private service: InstallationService,public modalController: ModalController,private router: Router) { 
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('tabs/tab1');
    });
    var decoded:any={}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
    console.log(decoded)
    let payload = {
     user_id:decoded.user_id,
    }
    this.service.getpaidbills(payload).subscribe(res => {
     this.bill_data = res;
  console.log(this.bill_data)
    })
  }
  bill_data = []
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
