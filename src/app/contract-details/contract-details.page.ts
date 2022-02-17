import { Component, OnInit } from '@angular/core';
import { InstallationService } from '../../services/main.service';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import jwt_decode from "jwt-decode";
import { NotificationService } from '../../services/notification.service'
import { ActivatedRoute } from '@angular/router';
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
  sub
  controlled
  constructor(public activatedRoute: ActivatedRoute, private notifyService : NotificationService,private platform: Platform,private service: InstallationService,private router: Router){
    console.log('In Constructor')
    this.platform.backButton.subscribeWithPriority(10, () => {
  if(this.controlled=='false'){
    this.router.navigateByUrl('contract_details/'+this.controlled);
  }
  else{
    this.router.navigateByUrl('tabs/settings');
  }
    
    });
   
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
          this.sub = this.activatedRoute.params.subscribe(params => {
            this.controlled = params['controlled'];
            var accepted=localStorage.getItem('accepted')
   
            console.log(this.controlled)
              console.log('this.controlled')
            if(accepted=='true'){
              console.log('accepted is true')
              if(this.controlled=='false'){
                console.log('controlled is false')
                this.router.navigateByUrl('menu-tabs/tab1');
              }
              // this.router.navigateByUrl('installation_manager/menu');
            }
          });
        }
       
  showToasterSuccess(){
    this.notifyService.showSuccess("Logged In Successfully !!", "")
}
  contract_data=[]
  notifications(){
    this.router.navigateByUrl('tabs/notifications');
  }
  back(){
   this.router.navigateByUrl('tabs/settings');
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
      // this.router.navigateByUrl('installation_manager/menu');
      
      this.showToasterSuccess()
    }
  }
  public form = [
    { val: 'Agree Terms and Conditions', isChecked: false }
  ];
}
