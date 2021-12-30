import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InstallationService } from '../../services/main.service';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import jwt_decode from "jwt-decode";
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
    var decoded:any={}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
    console.log(decoded)
    let payload = {
     user_id:decoded.user_id,
     bill_amount:this.amount
    }
      this.service.updatebill(payload).subscribe(res => {
       console.log(res)
         })
    }
  ngOnInit() {
  }
  uploadFiles(e){
    console.log(e)
  }
  dismiss() {
    console.log('Modal Dismissed!!!!!!!!!!!!')
     this.modalController.dismiss({
       'dismissed': true
     });
   }
}
