import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { InstallationService } from '../../services/main.service';
import { Platform } from '@ionic/angular';
import jwt_decode from "jwt-decode";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {


  constructor(public activatedRoute: ActivatedRoute,private platform: Platform,private service: InstallationService, private router: Router) {
    this.call_api()
    }
    ngOnInit() {
      // console.log('Inside Ng On INit')
      //   this.sub = this.activatedRoute.params.subscribe(params => {
      //     this.refresh = params['refresh'];
      //     console.log(this.refresh)
      //     if(this.refresh=='true'){
      //       console.log('Refresh is True')
      //       this.call_api()
      //     }
      //   });
       }
        sub
        refresh
    notifications_data = []
    call_api(){
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
      this.service.getnotifications(payload).subscribe(res => {
       this.notifications_data = res;
        console.log(this.notifications_data)
      })
    }
    // visitdetails(id){
    //    this.router.navigateByUrl('tabs/visitdetails/'+id);
    // }
    notifications(){
      this.router.navigateByUrl('tabs/notifications');
    }
    back() {
      this.router.navigateByUrl('menu-tabs/tab1');
      }
}
