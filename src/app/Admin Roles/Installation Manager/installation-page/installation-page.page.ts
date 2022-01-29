import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { UpdatepaymentModalPage } from '../updatepayment-modal/updatepayment-modal.page';
import jwt_decode from "jwt-decode";
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-installation-page',
  templateUrl: './installation-page.page.html',
  styleUrls: ['./installation-page.page.scss'],
})
export class InstallationPagePage implements OnInit {

  constructor(private platform: Platform,public alertController: AlertController,public modalController: ModalController,private router: Router) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('installation_manager/installation');
    });
  }

  ngOnInit() {
  }
  installation_status='progressing'
  stage_payment=''
  installation_stage_status='progressing'
  installation_data=[
    {
      installation_date:'Sunday, 3/26/2021 13:00',
      client_name:'Ahmad Gul',
       type_of_building:'Residential',
       client_city:'Dubai',
      location:'World Trade Center',
      no_of_stops:'6',
      machine_type:'Chinese',
       door_type:'Automatic',
       lift_type:'Passenger',
  },
  ]
async update(){
  const modal = await this.modalController.create({
    component: UpdatepaymentModalPage ,
    cssClass: 'malfunctiontype'
  });
  return await modal.present();
}
async startstage(){
  var decoded:any={}
  var retrievedtoken = localStorage.getItem('token') || ""
  decoded = jwt_decode(retrievedtoken);
  let payload = {
   user_id:decoded.user_id,
   installation_status:this.installation_status,
   stage_payment:this.stage_payment,
   installation_stage_status:this.installation_stage_status
}
console.log(payload)
  this.router.navigateByUrl('installation_manager/railanddoor_stage');
}
back(){
  this.router.navigateByUrl('installation_manager/installation');
}
}
