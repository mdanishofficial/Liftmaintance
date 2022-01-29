import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-contractdetails',
  templateUrl: './contractdetails.page.html',
  styleUrls: ['./contractdetails.page.scss'],
})
export class ContractdetailsPage implements OnInit {

 
  constructor(private platform: Platform,private router: Router) { 
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('installation_manager/curmonthexpiring');
    });
  }

  ngOnInit() {
  }
  async back(){
    this.router.navigateByUrl('installation_manager/curmonthexpiring');
  }
}
