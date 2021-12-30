import { Component, OnInit } from '@angular/core';
import { InstallationService } from '../../services/main.service';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-solvedcomplain',
  templateUrl: './solvedcomplain.page.html',
  styleUrls: ['./solvedcomplain.page.scss'],
})
export class SolvedcomplainPage implements OnInit {

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
    this.service.getsolvedcomplains(payload).subscribe(res => {
     this.complain_data = res;
  console.log(this.complain_data)
    })
  }
  complain_data
  ngOnInit() {
  }
  async solvedcomplain(){
    this.router.navigateByUrl('/tabs/solvedcomplain');
  }
  async pendingcomplain(){
    var refresh=false
    this.router.navigateByUrl('/tabs/pendingcomplain/'+refresh);
  }
  newcomplain(){
    console.log('inside new emergency complain')
    this.router.navigateByUrl('/tabs/newpendingcomplain');
  }
}
