import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-currentmalfunctionslist',
  templateUrl: './currentmalfunctionslist.page.html',
  styleUrls: ['./currentmalfunctionslist.page.scss'],
})
export class CurrentmalfunctionslistPage implements OnInit {

  constructor(private platform: Platform,private router: Router) { 
  }
  ngOnInit() {
  }
async solved(){
  this.router.navigateByUrl('installation_manager/solvedmalfunctionslist');
}
async current(){
  this.router.navigateByUrl('installation_manager/currentmalfunctionslist');
}
malfunction_details(){
  this.router.navigateByUrl('installation_manager/malfunction_details');
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
  malfunction_level:'Danger'
},
{
  client_name:'Shadab Khan',
   malfunction_date:'Sunday, 23-03-2020',
  malfunction_status:'New',
  technician_assigned:'Hassan Ali',
  malfunction_type:'Mechanical',
  malfunction_level:'Danger'
},
]
}
