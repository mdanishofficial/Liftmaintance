import { Component, OnInit } from '@angular/core';
import { SendinquiryModalPage } from '../sendinquiry-modal/sendinquiry-modal.page';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import { InstallationService } from '../../services/main.service';
import { ModalController } from '@ionic/angular';
import {formatDate} from '@angular/common';
import jwt_decode from "jwt-decode";
import { NotificationService } from '../../services/notification.service'
import { ActivatedRoute } from '@angular/router';
// import { SendinquiryModalPage } from '../sendinquiry-modal/sendinquiry-modal.page';
declare let $ : any;
@Component({
  selector: 'app-newinquiries',
  templateUrl: './newinquiries.page.html',
  styleUrls: ['./newinquiries.page.scss'],
})
export class NewinquiriesPage implements OnInit {
  inquiry_detail=''
  inquiry_type=''
  collapse=false
  constructor(public activatedRoute: ActivatedRoute,private notifyService : NotificationService,private platform: Platform,private service: InstallationService,public modalController: ModalController,private router: Router) {
this.call_api()
  }
  showToasterError(){
    this.notifyService.showError("Please Fill out All the Fields",'')
}
  notifications(){
    this.router.navigateByUrl('tabs/notifications');
  }
  sendinquiry(event){
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
                event.target.disabled = true;
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
    console.log('Inside Ng On INit')
      this.sub = this.activatedRoute.params.subscribe(params => {
        this.refresh = params['refresh'];
        console.log(this.refresh)
        if(this.refresh=='true'){
          console.log('Refresh is True')
          this.call_api()
        }
      });
     }
      sub
      refresh
      call_api(){
        var refresh=true
       this.platform.backButton.subscribeWithPriority(10, () => {
          this.router.navigateByUrl('/tabs/inquiries/'+refresh);
        });
      }
  passvalue(value){
    $("#collapseTwo").collapse('hide');
    this.inquiry_type=value
    this.call_api()
    console.log(this.inquiry_type)
  }
  collapsetrue(){
    console.log('Inside Collapse True')
    this.collapse=false
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
    var refresh=true
    this.router.navigateByUrl('/tabs/inquiries/'+refresh);
  }
}
