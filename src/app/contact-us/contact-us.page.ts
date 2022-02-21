import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Platform } from '@ionic/angular';
import { InstallationService } from '../../services/main.service';
import { NotificationService } from '../../services/notification.service';
import jwt_decode from "jwt-decode";
import { decode } from 'querystring';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
  client_name=''
  client_email=''
  contact=''
  message=''
  constructor(private notifyService : NotificationService,private service: InstallationService,private platform: Platform,private router: Router) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('tabs/settings');
     });
  }

  ngOnInit() {
  }
  showToasterSuccess(){
    this.notifyService.showSuccess("Query Added Successfully !!", "")
}
 
showToasterError(){
    this.notifyService.showError("One Or More Mandatory Fields Are Missing",'')
}
submit(){
  var decoded:any={}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
    console.log(decoded)
  if(this.message=='' || this.client_name==''){
    this.showToasterError();
  }
  else{
    let payload={
      client_name:this.client_email,
      client_email:this.client_email,
      client_phoneno:this.contact,
      message:this.message,
      user_id:decoded.user_id
        }
        try{
          this.service.addmessage(payload).subscribe(res => {
            console.log(res)
             })
               this.showToasterSuccess();
        }
        catch{
          this.showToasterError();
        }
  }

}
}
