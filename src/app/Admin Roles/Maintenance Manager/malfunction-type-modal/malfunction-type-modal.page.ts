import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-malfunction-type-modal',
  templateUrl: './malfunction-type-modal.page.html',
  styleUrls: ['./malfunction-type-modal.page.scss'],
})
export class MalfunctionTypeModalPage implements OnInit {

  constructor(public modalController: ModalController) { }
  ngOnInit() {
  }
  radioValue;
  radioGroupChange(e){
   
    console.log(e.detail.value)
    this.radioValue=e.detail.value
  }
  dismiss() {
    console.log('Modal Dismissed!!!!!!!!!!!!')
     this.modalController.dismiss({
       'dismissed': true
     });
   }
}
