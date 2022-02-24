import { Component, OnInit } from '@angular/core';
import { InstallationService } from '../../services/main.service';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import jwt_decode from "jwt-decode";
import { NotificationService } from '../../services/notification.service';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
email=''
password=''
  constructor(public loadingController: LoadingController,private notifyService : NotificationService,private platform: Platform,private service: InstallationService,private router: Router){
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('login');
    });
    
//     var decoded:any={}
//     try{
//       var retrievedtoken = localStorage.getItem('token') || ""
//       decoded = jwt_decode(retrievedtoken);
//       console.log(retrievedtoken)
  
//       if(retrievedtoken=='' ){
//         console.log('User Not Logged In')
//       }
//       else{
//         console.log('User Logged In')
//         if(decoded.user_role=='client'){
//           var controlled=false
//           this.router.navigateByUrl('contract_details/'+controlled);
//         }
//         if(decoded.user_role=='installation_manager'){
//           this.router.navigateByUrl('installation_manager/menu');
//         }
//       }
//     }
//  catch{
//    console.log('Error');
//    this.router.navigateByUrl('login');
//  } 
 }
   showToasterSuccess(){
    this.notifyService.showSuccess("Logged In Successfully !!", "")
}
 
showToasterError(){
    this.notifyService.showError("Invalid Password or Email",'')
}
// async presentLoading() {
//   const loading = await this.loadingController.create({
//     cssClass: 'my-custom-class',
//     message: 'Please wait...',
//     // duration: 5000
//   });
//   await loading.present();
//   await loading.dismiss();
//   const { role, data } = await loading.onDidDismiss();
//   console.log('Loading dismissed!');
// }
  ngOnInit() {
    // this.presentLoading()
  }
login(){
  var lowercaseemail=this.email.toLowerCase()
  let payload={
    user_email:lowercaseemail,
    password:this.password
        }
       this.service.login(payload).subscribe(res => {
    if(res.message=='Login successful'){
      localStorage.setItem('token', res.token);
      var decoded:any={}
        var retrievedtoken = localStorage.getItem('token') || ""
        decoded = jwt_decode(retrievedtoken);
      if(decoded.user_role=='client'){
        var controlled=false
          this.router.navigateByUrl('contract_details/'+controlled);
      }
      if(decoded.user_role=='installation_manager'){
        this.router.navigateByUrl('installation_manager/menu');
      }
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
