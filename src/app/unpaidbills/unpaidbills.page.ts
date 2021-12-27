import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { InstallationService } from '../../services/main.service';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-unpaidbills',
  templateUrl: './unpaidbills.page.html',
  styleUrls: ['./unpaidbills.page.scss'],
})
export class UnpaidbillsPage implements OnInit {

  constructor(private platform: Platform,private service: InstallationService, private router: Router) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('tabs/tab1');
    });
    let payload = {
      user_id: "123"
    }
    this.service.getunpaidbills(payload).subscribe(res => {
     this.bill_data = res;
  console.log(this.bill_data)
    })
  }
  bill_data = []
  ngOnInit() {
  }
  async unpaid(){
    this.router.navigateByUrl('/tabs/unpaidbills');
  }
  async paid(){
    this.router.navigateByUrl('/tabs/paidbills');
  }
  billdetails(){
    this.router.navigateByUrl('/tabs/billdetails');
  }
}
