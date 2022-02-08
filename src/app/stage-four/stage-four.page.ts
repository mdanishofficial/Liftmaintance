import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { InstallationService } from '../../services/main.service';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import jwt_decode from "jwt-decode";
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-stage-four',
  templateUrl: './stage-four.page.html',
  styleUrls: ['./stage-four.page.scss'],
})
export class StageFourPage implements OnInit {

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
          this.installation_data=res[3]
          console.log(this.installation_data)
          this.form[0].isChecked = this.installation_data.feature_1
          this.form[1].isChecked = this.installation_data.feature_2
          this.form[2].isChecked = this.installation_data.feature_3
        })
        }
  ngOnInit() {
  }
  installation_data
  public form = [
    { val: 'Other Feature' },
    { val: 'Other Feature'},
    { val: 'Other Feature',isChecked: false},
  ];
  notifications(){
    this.router.navigateByUrl('tabs/notifications');
  }
  back(){
    var refresh=true
    this.router.navigateByUrl('tabs/installation_stages/'+refresh);
  }
}
