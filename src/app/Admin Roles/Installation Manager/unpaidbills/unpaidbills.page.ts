import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-unpaidbills',
  templateUrl: './unpaidbills.page.html',
  styleUrls: ['./unpaidbills.page.scss'],
})
export class UnpaidbillsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  async unpaid(){
   this.router.navigateByUrl('installation_manager/unpaidbills');
  }
  async paid(){
  this.router.navigateByUrl('installation_manager/paidbills');
  }
  billdetails(id){
    this.router.navigateByUrl('/billdetails/'+id);
  }
}
