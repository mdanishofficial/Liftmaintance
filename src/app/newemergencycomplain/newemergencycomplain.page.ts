import { Component, OnInit } from '@angular/core';
import { InstallationService } from '../../services/main.service';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import {formatDate} from '@angular/common';
import jwt_decode from "jwt-decode";
import { NotificationService } from '../../services/notification.service';
declare let $ : any;
@Component({
  selector: 'app-newemergencycomplain',
  templateUrl: './newemergencycomplain.page.html',
  styleUrls: ['./newemergencycomplain.page.scss'],
})
export class NewemergencycomplainPage implements OnInit {
  malfunction_type=''
  complaindetail=''
  collapse=false
  constructor(private notifyService : NotificationService,private platform: Platform,private service: InstallationService,private router: Router){
     // this.router.navigateByUrl('tabs/pendingemergencycomplain/'+refresh);
    this.platform.backButton.subscribeWithPriority(10, () => {
      var refresh=true
      this.router.navigateByUrl('tabs/pendingemergencycomplain/'+refresh);
    });
    }
  showToasterSuccess(){
    this.notifyService.showSuccess("Complain Added Successfully !!", "")
}
 
showToasterError(){
    this.notifyService.showError("Please Fill Out Both The fields",'')
}
  send_complain(){
    if(this.malfunction_type==''|| this.complaindetail==''){
      this.showToasterError();
    }
    else{
    var date =formatDate(new Date(), 'yyyy-MM-dd', 'en');
    console.log(date)
    var decoded:any={}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
    console.log(decoded)
 
    let payload={
malfunction_type:this.malfunction_type,
complain_detail:this.complaindetail,
complain_type:'Emergency',
complain_status:'Pending',
complain_date:date,
user_id:decoded.user_id,
  }
  try{
    this.service.addcomplain(payload).subscribe(res => {
      console.log(res)
      this.showToasterSuccess();
         })
  }
  catch{
    console.log('Error')
    this.showToasterError();
  }
}

  }
  ngOnInit() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      var refresh=true
      this.router.navigateByUrl('tabs/pendingemergencycomplain/'+refresh);
    });
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
    this.router.navigateByUrl('tabs/pendingemergencycomplain/'+refresh);
  }
  
}
