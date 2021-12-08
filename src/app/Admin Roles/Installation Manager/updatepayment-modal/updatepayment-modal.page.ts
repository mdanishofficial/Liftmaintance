import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-updatepayment-modal',
  templateUrl: './updatepayment-modal.page.html',
  styleUrls: ['./updatepayment-modal.page.scss'],
})
export class UpdatepaymentModalPage implements OnInit {

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
