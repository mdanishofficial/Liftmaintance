import { Component, OnInit } from '@angular/core';
import { InstallationService } from '../../services/main.service';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import jwt_decode from "jwt-decode";
import { NotificationService } from '../../services/notification.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
email=''
password=''
  constructor(private notifyService : NotificationService,private platform: Platform,private service: InstallationService,private router: Router){
    // this.platform.backButton.subscribeWithPriority(10, () => {
    //   this.router.navigateByUrl('tabs/installation_stages');
    // });
    var decoded:any={}
    try{
      var retrievedtoken = localStorage.getItem('token') || ""
      decoded = jwt_decode(retrievedtoken);
      console.log(retrievedtoken)
  
      if(retrievedtoken=='' ){
        console.log('User Not Logged In')
      }
      else{
        console.log('User Logged In')
        this.router.navigateByUrl('tabs/contract_details');
      }
    }
 catch{
   console.log('Error');
   this.router.navigateByUrl('login');
 }
    
   
   }
   showToasterSuccess(){
    this.notifyService.showSuccess("Logged In Successfully !!", "")
}
 
showToasterError(){
    this.notifyService.showError("Invalid Password or Email",'')
}
  ngOnInit() {
  }
login(){
  let payload={
    user_email:this.email,
    password:this.password
        }
       this.service.login(payload).subscribe(res => {
    if(res.message=='Login successful'){
      localStorage.setItem('token', res.token);
      var decoded:any={}
      decoded = jwt_decode(res.token);
      this.router.navigateByUrl('tabs/contract_details');
      // this.showToasterSuccess();
    }
       },(err)=>{
          if(err.error=="INCORRECT PASSWORD"||err.error=="INCORRECT EMAIL"){
          this.showToasterError();
        }
          }
      )
     
    }

}
