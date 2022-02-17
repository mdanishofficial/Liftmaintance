import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { InstallationManagerServicesService } from '../../../../services/installation-manager-services.service';
@Component({
  selector: 'app-currentmalfunctionslist',
  templateUrl: './currentmalfunctionslist.page.html',
  styleUrls: ['./currentmalfunctionslist.page.scss'],
})
export class CurrentmalfunctionslistPage implements OnInit {

  constructor(public activatedRoute: ActivatedRoute,private service: InstallationManagerServicesService,private platform: Platform,private router: Router) { 
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('installation_manager/menu');
    });
    this.call_api()
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
    this.service.getcurrentmalfunctions().subscribe(res => {
      this.malfunction_data=res
      console.log(this.malfunction_data)
    })
  }
  malfunction_data=[]
async solved(){
  var refresh=true
  this.router.navigateByUrl('installation_manager/solvedmalfunctionslist/'+refresh);
}
async current(){
  var refresh=true
  this.router.navigateByUrl('installation_manager/currentmalfunctionslist/'+refresh);
}
malfunction_details(id){
  console.log(id)
  var status='current'
 this.router.navigateByUrl('installation_manager/malfunction_details/'+id+'/'+status);
}
// malfunction_data=[
//   {
//     client_name:'Ahmad Gul',
//      malfunction_date:'Sunday, 23-03-2020',
//     malfunction_status:'New',
//     technician_assigned:'Hassan Ali',
//     malfunction_type:'Mechanical',
//     malfunction_level:'Danger'
// },
// {
//   client_name:'Hassan Ali',
//    malfunction_date:'Sunday, 23-03-2020',
//   malfunction_status:'New',
//   technician_assigned:'Hassan Ali',
//   malfunction_type:'Mechanical',
//   malfunction_level:'Effective'
// },
// {
//   client_name:'Shadab Khan',
//    malfunction_date:'Sunday, 23-03-2020',
//   malfunction_status:'New',
//   technician_assigned:'Hassan Ali',
//   malfunction_type:'Mechanical',
//   malfunction_level:'Normal'
// },
// ]
}
