import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {Router} from "@angular/router";
import jwt_decode from "jwt-decode";
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-updatebill-modal',
  templateUrl: './updatebill-modal.page.html',
  styleUrls: ['./updatebill-modal.page.scss'],
})
export class UpdatebillModalPage implements OnInit {
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
