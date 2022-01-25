import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-forwardmalfunctions-modal',
  templateUrl: './forwardmalfunctions-modal.page.html',
  styleUrls: ['./forwardmalfunctions-modal.page.scss'],
})
export class ForwardmalfunctionsModalPage implements OnInit {

  constructor(public modalController: ModalController) { }
  installation_technician=''
  details=''
  ngOnInit() {
  }
  radioValue;
  radioGroupChange(e){
   
    // console.log(e.detail.value)
    this.radioValue=e.detail.value
  }
  installation_technicians=[
    {
      technician_name:'Hassan Ali'
    },
    {
      technician_name:'Shadab Khan'
    },
  ]
  update(){
    var decoded:any={}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
    let payload = {
     user_id:decoded.user_id,
     installation_technician:this.installation_technician,
     details:this.details,
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
