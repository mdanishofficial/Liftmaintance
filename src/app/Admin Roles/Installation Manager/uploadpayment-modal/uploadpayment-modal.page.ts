import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-uploadpayment-modal',
  templateUrl: './uploadpayment-modal.page.html',
  styleUrls: ['./uploadpayment-modal.page.scss'],
})
export class UploadpaymentModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  dismiss() {
    console.log('Modal Dismissed!!!!!!!!!!!!')
     this.modalController.dismiss({
       'dismissed': true
     });
   }
}
