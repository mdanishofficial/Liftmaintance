import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { InstallationService } from '../../services/main.service';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import jwt_decode from "jwt-decode";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-stage-one',
  templateUrl: './stage-one.page.html',
  styleUrls: ['./stage-one.page.scss'],
})
export class StageOnePage implements OnInit {
  constructor(private spinner: NgxSpinnerService,private platform: Platform,private service: InstallationService,private router: Router){
    console.log('In Constructor')
    this.platform.backButton.subscribeWithPriority(10, () => {
      var refresh=true
      this.router.navigateByUrl('tabs/installation_stages/'+refresh);
    });
    var decoded:any={}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
    console.log(decoded)
    let payload = {
     user_id:decoded.user_id,
    }
      this.service.getinstallationstage(payload).subscribe(res => {
          this.installation_data=res[0]
          console.log(this.installation_data)
          console.log('resssssss')
        })
        }
  ngOnInit() {
  }
  installation_data
  notifications(){
    this.router.navigateByUrl('tabs/notifications');
  }
  back(){
    console.log('In Back')
    var refresh=true
    this.router.navigateByUrl('tabs/installation_stages/'+refresh);
  }
}
