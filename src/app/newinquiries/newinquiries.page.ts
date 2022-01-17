import { Component, OnInit } from '@angular/core';
import { SendinquiryModalPage } from '../sendinquiry-modal/sendinquiry-modal.page';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import { InstallationService } from '../../services/main.service';
import { ModalController } from '@ionic/angular';
import {formatDate} from '@angular/common';
import jwt_decode from "jwt-decode";
import { NotificationService } from '../../services/notification.service'
// import { SendinquiryModalPage } from '../sendinquiry-modal/sendinquiry-modal.page';
@Component({
  selector: 'app-newinquiries',
  templateUrl: './newinquiries.page.html',
  styleUrls: ['./newinquiries.page.scss'],
})
export class NewinquiriesPage implements OnInit {
  inquiry_detail=''
  inquiry_type=''
  constructor(private notifyService : NotificationService,private platform: Platform,private service: InstallationService,public modalController: ModalController,private router: Router) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('tabs/installation_stages');
    });
  }
  showToasterError(){
    this.notifyService.showError("Please Fill out All the Fields",'')
}
  notifications(){
    this.router.navigateByUrl('tabs/notifications');
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
      inquiry_details:this.inquiry_detail,
      inquiry_type:this.inquiry_type,
      inquiry_date:date,
      inquiry_status:'pending'
          }
          if(this.inquiry_detail!=''&&this.inquiry_type!=''){
            this.service.addinquiry(payload).subscribe(res => {
              this.inquiry_data=res
              console.log(this.inquiry_data)
              if(res.message=="New Inquiry Added Successfully"){
                this.presentModalsendInquiry()
              }
              else{
                console.log('Error in Adding Inquiry')
              }
            })
          }
          else{
this.showToasterError()
          }
      
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
