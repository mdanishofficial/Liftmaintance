import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-updateprice-modal',
  templateUrl: './updateprice-modal.page.html',
  styleUrls: ['./updateprice-modal.page.scss'],
})
export class UpdatepriceModalPage implements OnInit {
price=''
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  dismiss() {
    console.log('Modal Dismissed!!!!!!!!!!!!')
     this.modalController.dismiss({
       'dismissed': true
     });
   }
   update(){
    var decoded: any = {}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
    let payload = {
      user_id: decoded.user_id,
      price: this.price,
    }
    console.log(payload)
   }
}
