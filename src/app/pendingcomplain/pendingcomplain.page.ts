import { Component, OnInit,Input,  Output, EventEmitter,SimpleChanges} from '@angular/core';
import { InstallationService } from '../../services/main.service';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import jwt_decode from "jwt-decode";
import {ChangeDetectorRef} from '@angular/core';
import { NewpendingcomplainPage } from "../newpendingcomplain/newpendingcomplain.page";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pendingcomplain',
  templateUrl: './pendingcomplain.page.html',
  styleUrls: ['./pendingcomplain.page.scss'],
})
export class PendingcomplainPage implements OnInit {
  @Input() ["parentfunc"]: NewpendingcomplainPage
 constructor(public activatedRoute: ActivatedRoute,private cdr:ChangeDetectorRef,private platform: Platform,private service: InstallationService,private router: Router){
   this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('menu-tabs/tab1');
    });
    this.call_api();
   }
  complain_data
  
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
    notifications(){
      this.router.navigateByUrl('tabs/notifications');
    }
 call_api(){
  var decoded:any={}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
  let payload = {
     user_id:decoded.user_id,
     complain_type:'Normal'
    }
   this.service.getpendingcomplains(payload).subscribe(res => {
    this.complain_data = res;
  console.log(this.complain_data)
 })
 }
 

  // ngOnChanges(changes:SimpleChanges) {
  //   console.log('Inside ng on changes')
  //   console.log(changes)
  //  var decoded:any={}
  //   var retrievedtoken = localStorage.getItem('token')
  //   decoded = jwt_decode(retrievedtoken);
  //   console.log(decoded)
  //   let payload = {
  //    user_id:decoded.user_id,
  //    complain_type:'normal'
  //   }
  // }
  ionViewWillEnter(){
    console.log('inside component will enter')
  }
  
  //   this.service.getpendingcomplains(payload).subscribe(res => {
  //    this.complain_data = res;
  // console.log(this.complain_data)
  //   })
  //   console.log(this.refresh)
  // }

  async solvedcomplain(){
    var refresh=true
    this.router.navigateByUrl('/tabs/solvedcomplain/'+refresh);
  }
  async pendingcomplain(){
    var refresh=true
    this.router.navigateByUrl('/tabs/pendingcomplain/'+refresh);
  }
  newcomplain(){
    this.router.navigateByUrl('newpendingcomplain');
  }
}
