import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-curmonthexpiring',
  templateUrl: './curmonthexpiring.page.html',
  styleUrls: ['./curmonthexpiring.page.scss'],
})
export class CurmonthexpiringPage implements OnInit {

 
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
    var refresh=true
    this.router.navigateByUrl('installation_manager/contracts/'+refresh);
  }
  contractdetails(){
    var refresh=true
    this.router.navigateByUrl('installation_manager/contractdetails/'+refresh);
  }
  curmonth(){
    var refresh=true
    this.router.navigateByUrl('installation_manager/curmonthexpiring/'+refresh);
  }
  expired(){
    var refresh=true
    this.router.navigateByUrl('installation_manager/expired/'+refresh);
  }
  async back(){
    var refresh=true
    this.router.navigateByUrl('installation_manager/myclient/'+refresh);
  }
}
