import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-malfunction-level-modal',
  templateUrl: './malfunction-level-modal.page.html',
  styleUrls: ['./malfunction-level-modal.page.scss'],
})
export class MalfunctionLevelModalPage implements OnInit {
  malfunctions_level=''
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
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
     malfunctions_level:this.malfunctions_level,
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
