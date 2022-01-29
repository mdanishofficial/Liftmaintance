import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-solvedmalfunctionslist',
  templateUrl: './solvedmalfunctionslist.page.html',
  styleUrls: ['./solvedmalfunctionslist.page.scss'],
})
export class SolvedmalfunctionslistPage implements OnInit {

  constructor(private platform: Platform,private router: Router) { 
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('installation_manager/menu');
    });
  }

  ngOnInit() {
  }
  async solved(){
    this.router.navigateByUrl('installation_manager/solvedmalfunctionslist');
  }
  async current(){
    this.router.navigateByUrl('installation_manager/currentmalfunctionslist');
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
