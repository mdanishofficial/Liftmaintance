import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-maintenance-manager-solvedmalfunctionslist',
  templateUrl: './maintenance-manager-solvedmalfunctionslist.page.html',
  styleUrls: ['./maintenance-manager-solvedmalfunctionslist.page.scss'],
})
export class MaintenanceManagerSolvedmalfunctionslistPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  solved(){
    console.log('inside solved')
    this.router.navigateByUrl('tabs/adminroles/maintenancemanager/maintenance-manager-solvedmalfunctionslist');
  }
  current(){
    console.log('inside current')
    this.router.navigateByUrl('tabs/adminroles/maintenancemanager/maintenance-manager-currentmalfunctionslist');
  }
}
