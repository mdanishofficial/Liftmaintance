import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UpdatepaymentModalPage } from '../updatepayment-modal/updatepayment-modal.page';
import { InstallationService } from '../../services/main.service';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import jwt_decode from "jwt-decode";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-paidbills',
  templateUrl: './paidbills.page.html',
  styleUrls: ['./paidbills.page.scss'],
})
export class PaidbillsPage implements OnInit {

  constructor(public activatedRoute: ActivatedRoute,private platform: Platform,private service: InstallationService,public modalController: ModalController,private router: Router) { 
   this.call_api()
  }
  bill_data = []
  ngOnInit() {
    console.log('Inside Ng On INit')
      this.sub = this.activatedRoute.params.subscribe(params => {
        this.refresh = params['refresh'];
        console.log(this.refresh)
        if(this.refresh=='true'){
          console.log('Refresh is True')
          // this.call_api()
        }
      });
     }
      sub
      refresh
      notifications(){
        this.router.navigateByUrl('tabs/notifications');
      }
  call_api(){
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('menu-tabs/tab1');
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
  async unpaid(){
    var refresh=false
    this.router.navigateByUrl('/tabs/unpaidbills/'+refresh);
  }
  async paid(){
    var refresh=false
    this.router.navigateByUrl('/tabs/paidbills/'+refresh);
  }
  async presentModalUpdatePayment(){
    
    console.log('emod property is accessible')
    const modal = await this.modalController.create({
      component: UpdatepaymentModalPage ,
      cssClass: 'updatePayment'
    });
    modal.onDidDismiss().then((data) => {
      this.call_api()
   });
    return await modal.present();
  }
}
