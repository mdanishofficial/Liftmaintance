import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import { InstallationService } from '../../services/main.service';
@Component({
  selector: 'app-inquiries',
  templateUrl: './inquiries.page.html',
  styleUrls: ['./inquiries.page.scss'],
})
export class InquiriesPage implements OnInit {

  constructor(private platform: Platform,private service: InstallationService,private router: Router){
    console.log('In Constructor')
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('tabs/installation_stages');
    });
          let payload={
      user_id:'123'
          }
         this.service.getinquiries(payload).subscribe(res => {
          this.inquiry_data=res
          console.log(this.inquiry_data)
        })
        }
        inquiry_data;
  ngOnInit() {
  }
  async inquiries(){
    this.router.navigateByUrl('/tabs/inquiries');
  }
  async faqs(){
    this.router.navigateByUrl('/tabs/faqs');
  }
  newinquiry(){
    this.router.navigateByUrl('/tabs/newinquiries');
  }
}

