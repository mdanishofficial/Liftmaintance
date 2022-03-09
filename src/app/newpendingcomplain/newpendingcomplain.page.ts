import { Component, OnInit,Output,Input, EventEmitter } from '@angular/core';
import { InstallationService } from '../../services/main.service';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import {formatDate} from '@angular/common';
import jwt_decode from "jwt-decode";
import { NotificationService } from '../../services/notification.service'
// import * as $ from 'jquery'
declare let $ : any;


@Component({
  selector: 'app-newpendingcomplain',
  templateUrl: './newpendingcomplain.page.html',
  styleUrls: ['./newpendingcomplain.page.scss'],
})
export class NewpendingcomplainPage implements OnInit {
malfunction_type=''
  complaindetail=''
  collapse=false
  constructor(private notifyService : NotificationService,private platform: Platform,private service: InstallationService,private router: Router){
   var refresh=true
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('tabs/pendingcomplain/'+refresh);
    });
  }

  ngOnInit() {
   }
  showToasterSuccess(){
    this.notifyService.showSuccess("Complain Added Successfully !!", "")
}
 
showToasterError(){
    this.notifyService.showError("Please Fill Out Both Fields",'')
}
  send_complain(event){
    if(this.malfunction_type==''|| this.complaindetail==''){
      this.showToasterError();
    }
    else{
    var date =formatDate(new Date(), 'yyyy-MM-dd', 'en');
    console.log(date)
    var decoded:any={}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
    let payload={
malfunction_type:this.malfunction_type,
complain_detail:this.complaindetail,
complain_type:'Normal',
complain_status:'Pending',
complain_date:date,
user_id:decoded.user_id,
  }
  console.log(payload)
  try{
    this.service.addcomplain(payload).subscribe(res => {
      console.log(res)
      this.showToasterSuccess();
      event.target.disabled = true;
      })
  }
  catch{
    console.log(' in catch')
  }
}
  // this.parentfunc.call_api()
  }
  passvalue(value){
    $("#collapseTwo").collapse('hide');
    this.malfunction_type=value
    console.log(this.malfunction_type)
  }
  collapsetrue(){
    console.log('Inside Collapse True')
    this.collapse=false
  }
  notifications(){
    this.router.navigateByUrl('tabs/notifications');
  }
  back(){
    var refresh=true
    this.router.navigateByUrl('tabs/pendingcomplain/'+refresh);
  }
}
