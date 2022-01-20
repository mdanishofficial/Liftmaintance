import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-paidbills',
  templateUrl: './paidbills.page.html',
  styleUrls: ['./paidbills.page.scss'],
})
export class PaidbillsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  async unpaid(){
    this.router.navigateByUrl('installation_manager/unpaidbills');
  }
  async paid(){
  this.router.navigateByUrl('installation_manager/paidbills');
  }
}
