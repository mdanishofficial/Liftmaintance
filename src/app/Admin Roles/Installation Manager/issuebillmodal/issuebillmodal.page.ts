import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-issuebillmodal',
  templateUrl: './issuebillmodal.page.html',
  styleUrls: ['./issuebillmodal.page.scss'],
})
export class IssuebillmodalPage implements OnInit {
cost=''
item=''
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
     cost:this.cost,
     item:this.item
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
