import { Component } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router: Router) { }
  maintenance(){
    console.log('inside maintenance')
    this.router.navigateByUrl('tabs/maintenancelist');
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
