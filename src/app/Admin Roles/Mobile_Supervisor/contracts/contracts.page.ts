import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.page.html',
  styleUrls: ['./contracts.page.scss'],
})
export class ContractsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  contract(){
    this.router.navigateByUrl('tabs/adminroles/Mobile_Supervisor/contracts');
  }
  curmonth(){
    this.router.navigateByUrl('tabs/adminroles/Mobile_Supervisor/curmonthexpiring');
  }
  expired(){
    this.router.navigateByUrl('tabs/adminroles/Mobile_Supervisor/expired');
  }
}
