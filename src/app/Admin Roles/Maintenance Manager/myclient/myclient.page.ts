import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-myclient',
  templateUrl: './myclient.page.html',
  styleUrls: ['./myclient.page.scss'],
})
export class MyclientPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  clientlisting(){
    this.router.navigateByUrl('tabs/adminroles/maintenancemanager/clientlisting');
  }
  contracts(){
    this.router.navigateByUrl('tabs/adminroles/maintenancemanager/contracts');
  }
}
