import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-updatebill-modal',
  templateUrl: './updatebill-modal.page.html',
  styleUrls: ['./updatebill-modal.page.scss'],
})
export class UpdatebillModalPage implements OnInit {
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
