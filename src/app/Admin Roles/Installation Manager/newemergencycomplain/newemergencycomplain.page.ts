import { Component, OnInit } from '@angular/core';
import { InstallationService } from '../../../../services/main.service';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import {formatDate} from '@angular/common';
import jwt_decode from "jwt-decode";
import { NotificationService } from '../../../../services/notification.service'
@Component({
  selector: 'app-newemergencycomplain',
  templateUrl: './newemergencycomplain.page.html',
  styleUrls: ['./newemergencycomplain.page.scss'],
})
export class NewemergencycomplainPage implements OnInit {
  malfunction_type=''
  complaindetail=''
  
  constructor(private notifyService : NotificationService,private platform: Platform,private service: InstallationService,private router: Router){
     // this.router.navigateByUrl('installation_manager/pendingemergencycomplain/'+refresh);
    this.platform.backButton.subscribeWithPriority(10, () => {
      var refresh=true
      this.router.navigateByUrl('installation_manager/pendingemergencycomplain/'+refresh);
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
complain_type:'emergency',
complain_status:'pending',
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
      this.router.navigateByUrl('installation_manager/pendingemergencycomplain/'+refresh);
    });
  }
  notifications(){
    this.router.navigateByUrl('installation_manager/notifications');
  }
  back(){
    var refresh=true
    this.router.navigateByUrl('installation_manager/pendingemergencycomplain/'+refresh);
  }

}
