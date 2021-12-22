import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InstallationService } from '../../services/main.service';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-updatepayment-modal',
  templateUrl: './updatepayment-modal.page.html',
  styleUrls: ['./updatepayment-modal.page.scss'],
})
export class UpdatepaymentModalPage implements OnInit {
  amount;
  image
  constructor(private platform: Platform,private service: InstallationService,private router: Router,public modalController: ModalController) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.modalController.dismiss({
        'dismissed': true
      });
    });
   }
   postbill(){
    console.log(this.image)
      let payload = {
        user_id: "123",
        bill_amount:this.amount
      }
      this.service.updatebill(payload).subscribe(res => {
       console.log(res)
         })
    }
  ngOnInit() {
  }
  dismiss() {
    console.log('Modal Dismissed!!!!!!!!!!!!')
     this.modalController.dismiss({
       'dismissed': true
     });
   }
}
