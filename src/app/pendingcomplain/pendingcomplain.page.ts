import { Component, OnInit,Input, OnChanges } from '@angular/core';
import { InstallationService } from '../../services/main.service';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-pendingcomplain',
  templateUrl: './pendingcomplain.page.html',
  styleUrls: ['./pendingcomplain.page.scss'],
})
export class PendingcomplainPage implements OnInit,OnChanges {
  @Input() refresh
  constructor(private platform: Platform,private service: InstallationService,private router: Router){
   this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('tabs/tab1');
    });
    var decoded:any={}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
    console.log(decoded)
    let payload = {
     user_id:decoded.user_id,
     complain_type:'normal'
    }
  
    this.service.getpendingcomplains(payload).subscribe(res => {
     this.complain_data = res;
  console.log(this.complain_data)
    })
   
  }
  complain_data
  
ngOnInit() {
  }
  ngOnChanges() {
   var decoded:any={}
    var retrievedtoken = localStorage.getItem('token')
    decoded = jwt_decode(retrievedtoken);
    console.log(decoded)
    let payload = {
     user_id:decoded.user_id,
     complain_type:'normal'
    }
  
    this.service.getpendingcomplains(payload).subscribe(res => {
     this.complain_data = res;
  console.log(this.complain_data)
    })
    console.log(this.refresh)
  }

  async solvedcomplain(){
    this.router.navigateByUrl('/tabs/solvedcomplain');
  }
  async pendingcomplain(){
    this.router.navigateByUrl('/tabs/pendingcomplain');
  }
  newcomplain(){
    this.router.navigateByUrl('newpendingcomplain');
  }
}
