import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-parts-modal',
  templateUrl: './parts-modal.page.html',
  styleUrls: ['./parts-modal.page.scss'],
})
export class PartsModalPage implements OnInit {

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
