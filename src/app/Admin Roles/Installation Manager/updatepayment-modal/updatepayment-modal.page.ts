import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import jwt_decode from "jwt-decode";
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-updatepayment-modal',
  templateUrl: './updatepayment-modal.page.html',
  styleUrls: ['./updatepayment-modal.page.scss'],
})
export class UpdatepaymentModalPage implements OnInit {
  amount=''
payment_receipt=''
 constructor(private platform: Platform,private router: Router,public modalController: ModalController) { 
  this.platform.backButton.subscribeWithPriority(10, () => {
    this.modalController.dismiss({
      'dismissed': true
    });
  });
 }
ngOnInit() {
  }
  dismiss() {
    console.log('Modal Dismissed!!!!!!!!!!!!')
     this.modalController.dismiss({
       'dismissed': true
     });
   }
   postbill(){
    var decoded: any = {}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
    let payload = {
      user_id: decoded.user_id,
      amount: this.amount,
      image:this.payment_receipt
    }
    console.log(payload)
   }
}
