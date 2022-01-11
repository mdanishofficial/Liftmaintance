import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { InstallationService } from '../../services/main.service';
import { Platform } from '@ionic/angular';
import jwt_decode from "jwt-decode";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-currentmalfunctions',
  templateUrl: './currentmalfunctions.page.html',
  styleUrls: ['./currentmalfunctions.page.scss'],
})
export class CurrentmalfunctionsPage implements OnInit {

  constructor(public activatedRoute: ActivatedRoute,private platform: Platform,private service: InstallationService, private router: Router) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('menu-tabs/tab1');
    });
    this.call_api()
  }
  ngOnInit() {
    console.log('Inside Ng On INit')
      this.sub = this.activatedRoute.params.subscribe(params => {
        this.refresh = params['refresh'];
        console.log(this.refresh)
        if(this.refresh=='true'){
          console.log('Refresh is True')
          this.call_api()
        }
      });
     }
      sub
      refresh
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
     malfunction_staus:'unsolved'
    }
    this.service.getcurrentmalfunctions(payload).subscribe(res => {
     this.malfunction_data = res;
  console.log(this.malfunction_data)
    })
  }
  malfunction_data = []
  async malfunctions(){
    var refresh=false
    this.router.navigateByUrl('/tabs/malfunctionslist/'+refresh);
  }
  async currentmalfunctions(){
    var refresh=true
    this.router.navigateByUrl('/tabs/currentmalfunctionslist/'+refresh);
  }
  async currentmalfunction_details(id){
    this.router.navigateByUrl('detailed_current_malfunctions/'+id);
  }
  notifications(){
    this.router.navigateByUrl('tabs/notifications');
  }
  }
