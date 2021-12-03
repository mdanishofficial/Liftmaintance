import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage{

  constructor(private router: Router) { }
  totalvisits(){
    console.log('inside Installation')
    this.router.navigateByUrl('tabs/installation');
  }
  totalassignedvisits(){
    console.log('inside maintenance')
    this.router.navigateByUrl('tabs/adminroles/adminroles/maintenancemanager/maintenance-manager-maintenancelist');
  }
  upcomingvisits(){
    console.log('inside malfunctions')
    this.router.navigateByUrl('tabs/malfunctionslist');
  }
  previousvisits(){
    console.log('inside bills')
    this.router.navigateByUrl('tabs/unpaidbills');
  }
  visitreport(){
    console.log('inside complain')
    this.router.navigateByUrl('tabs/pendingcomplain');
  }
  previousvisitreport(){
    console.log('inside emergency complain')
    this.router.navigateByUrl('tabs/pendingemergencycomplain');
  }
}
