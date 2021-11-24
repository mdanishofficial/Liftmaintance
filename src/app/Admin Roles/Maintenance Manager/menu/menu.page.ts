import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage{

  constructor(private router: Router) { }
  installation(){
    console.log('inside Installation')
    this.router.navigateByUrl('tabs/installation');
  }
  maintenance(){
    console.log('inside maintenance')
    this.router.navigateByUrl('tabs/adminroles/adminroles/maintenancemanager/maintenance-manager-maintenancelist');
  }
  malfunctions(){
    console.log('inside malfunctions')
    this.router.navigateByUrl('tabs/malfunctionslist');
  }
  bills(){
    console.log('inside bills')
    this.router.navigateByUrl('tabs/unpaidbills');
  }
  complain(){
    console.log('inside complain')
    this.router.navigateByUrl('tabs/pendingcomplain');
  }
  emergencycomplain(){
    console.log('inside emergency complain')
    this.router.navigateByUrl('tabs/pendingemergencycomplain');
  }

}
