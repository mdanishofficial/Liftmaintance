import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import {ActivatedRoute, Router} from "@angular/router";
import { MalfunctionTypeModalPage } from '../malfunction-type-modal/malfunction-type-modal.page';
import { MalfunctionLevelModalPage } from '../malfunction-level-modal/malfunction-level-modal.page';
import { MalfunctionStatusModalPage } from '../malfunction-status-modal/malfunction-status-modal.page';
import { IssuebillmodalPage } from '../issuebillmodal/issuebillmodal.page';
import { UploadpaymentModalPage } from '../uploadpayment-modal/uploadpayment-modal.page';
import { InstallationManagerServicesService } from '../../../../services/installation-manager-services.service';
import { ForwardmalfunctionsModalPage } from '../forwardmalfunctions-modal/forwardmalfunctions-modal.page';
@Component({
  selector: 'app-malfunctionsdetails',
  templateUrl: './malfunctionsdetails.page.html',
  styleUrls: ['./malfunctionsdetails.page.scss'],
})
export class MalfunctionsdetailsPage implements OnInit {

  constructor(public activatedRoute: ActivatedRoute,private service: InstallationManagerServicesService,private platform: Platform,public modalController: ModalController,private router: Router) { 
    var refresh=true
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('installation_manager/currentmalfunctionslist/'+refresh);
    });
   
  }
  
  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.status=params['status']
      console.log(this.status)
    });
    this.call_api()
  }
  sub
  status
  id
  call_api(){
    console.log('inside call api')
    console.log(this.status)
    var refresh=true
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('installation_manager/currentmalfunctionslist/'+refresh);
    });

    if(this.status=='current'){
      console.log('inside current api')
      this.service.getcurrentmalfunctions().subscribe(res => {
        this.malfunction_data=res
        console.log(this.malfunction_data)
      })
      }
      else{
        if(this.status=='solved'){
          console.log('inside solved api')
          this.service.getsolvedmalfunctions().subscribe(res => {
            this.malfunction_data=res
            console.log(this.malfunction_data)
          })
          }
      }
  }
  malfunction_data=[]
  // malfunctions_data=[
  //   {
  //     malfunctions_date:'Sunday, 3/26/2021 13:00',
  //     client_name:'Ahmad Gul',
  //     assigned_technician:'Hassan',
  //     lift_no:'03',
  //     complain_notes:'How to stop the bell  How to stop the bell How to stop the bell How to stop the bell How to stop the bell',
  //      }
  // ]
  bill_data=[
    {
      cost:'700 Riyals',
      item_name:'Some item Name',
   },
   {
    cost:'700 Riyals',
    item_name:'Some item Name',
 },
 {
  cost:'7800 Riyals',
  item_name:'Some item Name',
}
  ]
  payment_complain=[
    {
      cost:'700 Riyals',
   },
  ]
async malfunctiontypemodal(){
  console.log(this.malfunction_data[this.id].malfunction_id)
  const modal = await this.modalController.create({
    component: MalfunctionTypeModalPage ,
    cssClass: 'malfunctiontype',
    componentProps: {
      'malfunction_id': this.malfunction_data[this.id].malfunction_id
    }
  });
  modal.onDidDismiss().then((data) => {
    this.call_api()
 });
  return await modal.present();
}
async malfunctionlevelmodal(){
  console.log('emod property is accessible')
  const modal = await this.modalController.create({
    component: MalfunctionLevelModalPage ,
    cssClass: 'malfunctionlevel',
    componentProps: {
      'malfunction_id': this.malfunction_data[this.id].malfunction_id
    }
  });
  modal.onDidDismiss().then((data) => {
    this.call_api()
 });
  return await modal.present();
}
async malfunctionstatusmodal(){
  console.log('emod property is accessible')
  const modal = await this.modalController.create({
    component: MalfunctionStatusModalPage ,
    cssClass: 'malfunctionstatus',
    componentProps: {
      'malfunction_id': this.malfunction_data[this.id].malfunction_id
    }
  });
  modal.onDidDismiss().then((data) => {
    this.call_api()
 });
  return await modal.present();
}
async newbillmodal(){
  console.log('emod property is accessible')
  const modal = await this.modalController.create({
    component: IssuebillmodalPage ,
    cssClass: 'issuebill',
    componentProps: {
      'malfunction_id': this.malfunction_data[this.id].malfunction_id
    }
  });
  modal.onDidDismiss().then((data) => {
    this.call_api()
 });
  return await modal.present();
}
async forwardmodal(){
  console.log('emod property is accessible')
  const modal = await this.modalController.create({
    component: ForwardmalfunctionsModalPage,
    cssClass: 'forwardmodal',
    componentProps: {
      'malfunction_id': this.malfunction_data[this.id].malfunction_id
    }
  });
  modal.onDidDismiss().then((data) => {
    this.call_api()
 });
  return await modal.present();
}
async uploadpaymentmodal(){
  console.log('emod property is accessible')
  const modal = await this.modalController.create({
    component: UploadpaymentModalPage,
    cssClass: 'uploadpayment'
  });
  modal.onDidDismiss().then((data) => {
    this.call_api()
 });
  return await modal.present();
}
}
