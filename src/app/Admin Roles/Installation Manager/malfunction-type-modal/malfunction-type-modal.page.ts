import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-malfunction-type-modal',
  templateUrl: './malfunction-type-modal.page.html',
  styleUrls: ['./malfunction-type-modal.page.scss'],
})
export class MalfunctionTypeModalPage implements OnInit {

  constructor(public modalController: ModalController) { }
  ngOnInit() {
  }
  malfunctions_type=''
  radioValue;
  radioGroupChange(e){
   
    // console.log(e.detail.value)
    this.radioValue=e.detail.value
  }
  update(){
    var decoded:any={}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
    let payload = {
     user_id:decoded.user_id,
     malfunctions_type:this.malfunctions_type,
  }
  console.log(payload)
  }
  dismiss() {
    console.log('Modal Dismissed!!!!!!!!!!!!')
     this.modalController.dismiss({
       'dismissed': true
     });
   }
}
