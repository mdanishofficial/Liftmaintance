import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { InstallationService } from '../../services/main.service';
import { Platform } from '@ionic/angular';
import jwt_decode from "jwt-decode";
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-installation-stages',
  templateUrl: './installation-stages.page.html',
  styleUrls: ['./installation-stages.page.scss'],
})

export class InstallationStagesPage implements OnInit {
  constructor(private spinner: NgxSpinnerService,public activatedRoute: ActivatedRoute,private platform: Platform,private service: InstallationService, private router: Router) {
    // this.spinner.show();
  
    this.call_api();
    // console.log('after')
    // this.spinner.hide()
    // console.log('hide')
   }
  ngOnInit() {
  // setTimeout(() => {
    //   /** spinner ends after 5 seconds */
    //   this.spinner.hide();
    // }, 2000);
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
    console.log('Inside Call Api')
    this.spinner.show();
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('menu-tabs/tab1');
    });
    var decoded:any={}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
   // cabin_status
    let payload = {
      user_id:decoded.user_id,
      // railanddoor_id: "a84edc",
      // cabin_id: '642766',
      // machine_id: '4852e1',
      // controldelivery_id: "1a5eec",
    }
    // this.service.getrailanddoor(payload).subscribe(res => {
    //   console.log(res)
    //   this.railanddoor_data = res;
    // })
    // this.service.getcabin(payload).subscribe(res => {
    //   this.cab_data = res;
    // })
    // this.service.getmachine(payload).subscribe(res => {
    //   this.machine_data = res;
    // })
    // this.service.getcontroldelivery(payload).subscribe(res => {
    //   this.controldelivery_data = res;
    // })
    
      this.service.getinstallationstage(payload).subscribe(res => {
      console.log(res)
      this.stages_data = res;
    })
   
    // this.spinner.hide();
    this.spinner.hide();
    console.log('End Of Call Api')
  }
  stages_data=[]
  railanddoor(){
    this.router.navigateByUrl('raildoor');
  }
  cabin(){
    this.router.navigateByUrl('cabin');
  }
  machine(){
    this.router.navigateByUrl('installation-stages-details');
  }
  controldelivery(){
    this.router.navigateByUrl('controldelivery');
  }
  stagedetails(id){
if(id==0){
  this.router.navigateByUrl('stage-one');
}
if(id==1){
  this.router.navigateByUrl('stage-two');
}
if(id==2){
  this.router.navigateByUrl('stage-three');
}
if(id==3){
  this.router.navigateByUrl('stage-four');
}
  }
  installation() {
  this.router.navigateByUrl('installation');
  }
  notifications(){
    this.router.navigateByUrl('tabs/notifications');
  }
  
  railanddoor_data;
  cab_data = []
  machine_data = []
  controldelivery_data = []
}
