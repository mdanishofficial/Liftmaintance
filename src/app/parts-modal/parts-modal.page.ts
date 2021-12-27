import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InstallationService } from '../../services/main.service';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-parts-modal',
  templateUrl: './parts-modal.page.html',
  styleUrls: ['./parts-modal.page.scss'],
})
export class PartsModalPage implements OnInit {

  constructor(private platform: Platform,private service: InstallationService,private router: Router,public modalController: ModalController) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.modalController.dismiss({
        'dismissed': true
      });
    });
   }
  radiovalue

  ngOnInit() {
  }
  dismiss() {
    console.log('Modal Dismissed!!!!!!!!!!!!')
     this.modalController.dismiss({
       'dismissed': true
     });
   }
  
   addparts(){
    
  var decoded:any={}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
    console.log(this.form.length)
    for(var i=0;i<this.form.length;i++){
if(this.form[i].isChecked==true){
  this.parts[i]=this.form[i]
}
}
console.log(this.parts)
   
    let payload = {
    
     user_id:decoded.user_id,
    }
    console.log(payload)
    this.service.addmalfunctionparts(payload).subscribe(res => {
     this.malfunction_data = res;
        console.log(this.malfunction_data)
      })
      this.modalController.dismiss({
        'dismissed': true
      });
   }
   malfunction_data
   parts=[]
   public form = [
    { val: 'Door Card', isChecked: false },
    { val: 'Gallon', isChecked: false },
    { val: 'Door Fork', isChecked: false }

  ];

  }

