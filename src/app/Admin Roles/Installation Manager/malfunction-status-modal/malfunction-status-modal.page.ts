import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-malfunction-status-modal',
  templateUrl: './malfunction-status-modal.page.html',
  styleUrls: ['./malfunction-status-modal.page.scss'],
})
export class MalfunctionStatusModalPage implements OnInit {
  malfunctions_status=''
  constructor(public modalController: ModalController) { }
  ngOnInit() {
  }
  radioValue;
  radioGroupChange(e){
   
    console.log(e.detail.value)
    this.radioValue=e.detail.value
  }
  update(){
    var decoded:any={}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
    let payload = {
     user_id:decoded.user_id,
     malfunctions_status:this.malfunctions_status,
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
