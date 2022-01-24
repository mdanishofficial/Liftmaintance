import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { InstallationService } from '../../../../services/main.service';
import { Platform } from '@ionic/angular';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-unpaidbills',
  templateUrl: './unpaidbills.page.html',
  styleUrls: ['./unpaidbills.page.scss'],
})
export class UnpaidbillsPage implements OnInit {
  constructor(private platform: Platform,private service: InstallationService, private router: Router) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('installation_manager/menu');
    });
    this.call_api()
  }
  bill_data = []
  ngOnInit() {
  }
  call_api(){
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('installation_manager/tab1');
    });
    var decoded:any={}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
    console.log(decoded)
    let payload = {
     user_id:decoded.user_id,
    }
    this.service.getunpaidbills(payload).subscribe(res => {
     this.bill_data = res;
  console.log(this.bill_data)
    })
  }
  async unpaid(){
    var refresh=true
    this.router.navigateByUrl('/installation_manager/unpaidbills/'+refresh);
  }
  async paid(){
    var refresh=true
    this.router.navigateByUrl('/installation_manager/paidbills/'+refresh);
  }
  billdetails(id){
    this.router.navigateByUrl('installation_manager/billdetails/'+id);
  }
  notifications(){
    this.router.navigateByUrl('installation_manager/notifications');
  }
}
