import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-currentmalfunctionslist',
  templateUrl: './currentmalfunctionslist.page.html',
  styleUrls: ['./currentmalfunctionslist.page.scss'],
})
export class CurrentmalfunctionslistPage implements OnInit {

  constructor(public activatedRoute: ActivatedRoute,private platform: Platform,private router: Router) { 
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('installation_manager/menu');
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
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('installation_manager/menu');
    });
  }
async solved(){
  var refresh=false
  this.router.navigateByUrl('installation_manager/solvedmalfunctionslist/'+refresh);
}
async current(){
  var refresh=false
  this.router.navigateByUrl('installation_manager/currentmalfunctionslist/'+refresh);
}
malfunction_details(){
  var refresh=false
  this.router.navigateByUrl('installation_manager/malfunction_details/'+refresh);
}
malfunction_data=[
  {
    client_name:'Ahmad Gul',
     malfunction_date:'Sunday, 23-03-2020',
    malfunction_status:'New',
    technician_assigned:'Hassan Ali',
    malfunction_type:'Mechanical',
    malfunction_level:'Danger'
},
{
  client_name:'Hassan Ali',
   malfunction_date:'Sunday, 23-03-2020',
  malfunction_status:'New',
  technician_assigned:'Hassan Ali',
  malfunction_type:'Mechanical',
  malfunction_level:'Effective'
},
{
  client_name:'Shadab Khan',
   malfunction_date:'Sunday, 23-03-2020',
  malfunction_status:'New',
  technician_assigned:'Hassan Ali',
  malfunction_type:'Mechanical',
  malfunction_level:'Normal'
},
]
}
