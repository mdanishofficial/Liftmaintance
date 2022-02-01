import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-contractdetails',
  templateUrl: './contractdetails.page.html',
  styleUrls: ['./contractdetails.page.scss'],
})
export class ContractdetailsPage implements OnInit {

 
  constructor(private platform: Platform,private router: Router) { 
    var refresh=true
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('installation_manager/curmonthexpiring/'+refresh);
    });
  }

  ngOnInit() {
  }
  call_api(){
var refresh=true
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('installation_manager/curmonthexpiring/'+refresh);
    });
  }
  async back(){
    var refresh=true
    this.router.navigateByUrl('installation_manager/curmonthexpiring/'+refresh);
  }
}
