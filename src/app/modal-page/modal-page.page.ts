import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss'],
})
export class ModalPagePage implements OnInit {

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
