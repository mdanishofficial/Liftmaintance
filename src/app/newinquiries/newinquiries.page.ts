import { Component, OnInit } from '@angular/core';
import { SendinquiryModalPage } from '../sendinquiry-modal/sendinquiry-modal.page';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import { InstallationService } from '../../services/main.service';
import { ModalController } from '@ionic/angular';
import {formatDate} from '@angular/common';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-newinquiries',
  templateUrl: './newinquiries.page.html',
  styleUrls: ['./newinquiries.page.scss'],
})
export class NewinquiriesPage implements OnInit {
  inquirydetail=''
  inquiry_type=''
  constructor(private platform: Platform,private service: InstallationService,public modalController: ModalController,private router: Router) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('tabs/installation_stages');
    });
  }
  sendinquiry(){
    var date =formatDate(new Date(), 'yyyy-MM-dd', 'en');
    console.log(date)
    var decoded:any={}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
    console.log(decoded)
 
    let payload={
      user_id:decoded.user_id,
      inquiry_detail:this.inquirydetail,
      inquiry_type:this.inquiry_type,
      inquiry_date:date,
      inquiry_status:'pending'
          }
         this.service.addinquiry(payload).subscribe(res => {
          this.inquiry_data=res
          console.log(this.inquiry_data)
        })
  }
      
  inquiry_data
  ngOnInit() {
  }
  async presentModalsendInquiry(){
    
    console.log('emod property is accessible')
    const modal = await this.modalController.create({
      component: SendinquiryModalPage ,
      cssClass: 'sendInquiry'
    });
    return await modal.present();
  }
  cancel(){
    this.router.navigateByUrl('tabs/inquiries');
  }
}
