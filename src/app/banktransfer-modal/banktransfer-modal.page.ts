import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-banktransfer-modal',
  templateUrl: './banktransfer-modal.page.html',
  styleUrls: ['./banktransfer-modal.page.scss'],
})
export class BanktransferModalPage implements OnInit {

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
