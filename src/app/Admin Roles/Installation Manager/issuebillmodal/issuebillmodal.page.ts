import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-issuebillmodal',
  templateUrl: './issuebillmodal.page.html',
  styleUrls: ['./issuebillmodal.page.scss'],
})
export class IssuebillmodalPage implements OnInit {

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
