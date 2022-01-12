import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import { InstallationService } from '../../services/main.service';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-inquiries',
  templateUrl: './inquiries.page.html',
  styleUrls: ['./inquiries.page.scss'],
})
export class InquiriesPage implements OnInit {

  constructor(private platform: Platform,private service: InstallationService,private router: Router){
    console.log('In Constructor')
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('menu-tabs/tab1');
    });
    var decoded:any={}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
    console.log(decoded)
    let payload = {
     user_id:decoded.user_id,
    }
         this.service.getinquiries(payload).subscribe(res => {
          this.inquiry_data=res
          console.log(this.inquiry_data)
        })
        }
        inquiry_data;
  ngOnInit() {
  }
  notifications(){
    this.router.navigateByUrl('tabs/notifications');
  }
  async inquiries(){
    this.router.navigateByUrl('/tabs/inquiries');
  }
  async faqs(){
    this.router.navigateByUrl('/tabs/faqs');
  }
  newinquiry(){
    this.router.navigateByUrl('/tabs/newinquiries');
  }
}

