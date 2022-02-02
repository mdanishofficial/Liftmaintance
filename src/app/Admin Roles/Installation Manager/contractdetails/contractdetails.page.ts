import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-contractdetails',
  templateUrl: './contractdetails.page.html',
  styleUrls: ['./contractdetails.page.scss'],
})
export class ContractdetailsPage implements OnInit {

 
  constructor(public activatedRoute: ActivatedRoute,private platform: Platform,private router: Router) { 
    var refresh=true
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('installation_manager/curmonthexpiring/'+refresh);
    });
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
