import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-uploadpayment-modal',
  templateUrl: './uploadpayment-modal.page.html',
  styleUrls: ['./uploadpayment-modal.page.scss'],
})
export class UploadpaymentModalPage implements OnInit {

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
}
