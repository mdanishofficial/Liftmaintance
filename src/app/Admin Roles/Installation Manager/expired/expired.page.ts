import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-expired',
  templateUrl: './expired.page.html',
  styleUrls: ['./expired.page.scss'],
})
export class ExpiredPage implements OnInit {

  constructor(public activatedRoute: ActivatedRoute,private platform: Platform,private router: Router) {
    var refresh=true
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('installation_manager/myclient/'+refresh);
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
      this.router.navigateByUrl('installation_manager/myclient/'+refresh);
    });
  }
  contracts=[
   
    {
      client_name:'Shadab Khan',
      lift_number:'6',
      contract_price:'23000 Riyals',
      contract_end_date:'22-3-2010'
    },  {
      client_name:'Shadab Khan',
      lift_number:'6',
      contract_price:'23000 Riyals',
      contract_end_date:'22-3-2010'
    },
    {
      client_name:'Shadab Khan',
      lift_number:'6',
      contract_price:'23000 Riyals',
      contract_end_date:'22-3-2010'
    },
    {
      client_name:'Shadab Khan',
      lift_number:'6',
      contract_price:'23000 Riyals',
      contract_end_date:'22-3-2010'
    }
  ]
  contract(){
    var refresh=false
    this.router.navigateByUrl('installation_manager/contracts/'+refresh);
  }
  curmonth(){
    var refresh=false
    this.router.navigateByUrl('installation_manager/curmonthexpiring/'+refresh);
  }
  expired(){
    var refresh=false
    this.router.navigateByUrl('installation_manager/expired/'+refresh);
  }
  updatepricecontractdetails(){
    var refresh=false
    this.router.navigateByUrl('installation_manager/updatepricecontractdetails/'+refresh);
  }
  async back(){
    var refresh=true
    this.router.navigateByUrl('installation_manager/myclient/'+refresh);
  }
}
