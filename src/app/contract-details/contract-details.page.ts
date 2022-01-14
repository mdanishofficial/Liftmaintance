import { Component, OnInit } from '@angular/core';
import { InstallationService } from '../../services/main.service';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import jwt_decode from "jwt-decode";
import { NotificationService } from '../../services/notification.service'

@Component({
  selector: 'app-contract-details',
  templateUrl: './contract-details.page.html',
  styleUrls: ['./contract-details.page.scss'],
})

export class ContractDetailsPage implements OnInit {
  stops=''
  doortype=''
  machinetype=''
  speed=''
  payloads=''
  time=''
  elevatortype=''
  startdate=''
  enddate=''
  constructor(private notifyService : NotificationService,private platform: Platform,private service: InstallationService,private router: Router){
    console.log('In Constructor')
    // this.platform.backButton.subscribeWithPriority(10, () => {
    //   var refresh=true
    //   this.router.navigateByUrl('tabs/installation_stages/'+refresh);
    // });
    var accepted=localStorage.getItem('accepted')
    console.log(accepted)
    if(accepted=='true'){
      this.router.navigateByUrl('menu-tabs/tab1');
    }
    var decoded:any={}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
    console.log(decoded)
    let payload = {
     user_id:decoded.user_id,
    }
   this.service.getcontract(payload).subscribe(res => {
          this.contract_data[0]=res
          console.log(this.contract_data)
          console.log('this.contract_data')
        })
        }

  ngOnInit() {
  }
  showToasterSuccess(){
    this.notifyService.showSuccess("Logged In Successfully !!", "")
}
  contract_data=[]
  notifications(){
    this.router.navigateByUrl('tabs/notifications');
  }
  back(){
    var refresh=true
    this.router.navigateByUrl('tabs/installation_stages/'+refresh);
  }
  showToasterError(){
    this.notifyService.showError("Kindly Accept Terms and Conditions",'')
}
  startapp(){
    if(this.form[0].isChecked==false){
      this.showToasterError();
    }
    else{
      localStorage.setItem('accepted','true');
      this.router.navigateByUrl('menu-tabs/tab1');
      this.showToasterSuccess()
    }
  }
  public form = [
    { val: 'Agree Terms and Conditions', isChecked: false }
  ];
}
