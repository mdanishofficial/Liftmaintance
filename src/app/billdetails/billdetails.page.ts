import { Component, OnInit } from '@angular/core';
import { UpdatepaymentModalPage } from '../updatepayment-modal/updatepayment-modal.page';
import { InstallationService } from '../../services/main.service';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-billdetails',
  templateUrl: './billdetails.page.html',
  styleUrls: ['./billdetails.page.scss'],
})
export class BilldetailsPage implements OnInit {

  constructor(private platform: Platform,private service: InstallationService,private router: Router,public modalController: ModalController) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('tabs/unpaidbills');
    });
          let payload={
      user_id:'123'
          }
          this.service.getunpaidbills(payload).subscribe(res => {
            this.bill_data = res;
         console.log(this.bill_data)
           })

  }
bill_data
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
    back(){
      this.router.navigateByUrl('tabs/unpaidbills');
    }
  }
