import { Component, OnInit } from '@angular/core';
import { InstallationService } from '../../services/main.service';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-pendingcomplain',
  templateUrl: './pendingcomplain.page.html',
  styleUrls: ['./pendingcomplain.page.scss'],
})
export class PendingcomplainPage implements OnInit {

  constructor(private platform: Platform,private service: InstallationService,private router: Router){
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('tabs/tab1');
    });
    let payload = {
      user_id: "123",
      complain_type:'normal'
    }
    this.service.getpendingcomplains(payload).subscribe(res => {
     this.complain_data = res;
  console.log(this.complain_data)
    })
   
  }
  complain_data
  
ngOnInit() {
  }
  async solvedcomplain(){
    this.router.navigateByUrl('/tabs/solvedcomplain');
  }
  async pendingcomplain(){
    this.router.navigateByUrl('/tabs/pendingcomplain');
  }
  newcomplain(){
    this.router.navigateByUrl('/tabs/newpendingcomplain');
  }
}
