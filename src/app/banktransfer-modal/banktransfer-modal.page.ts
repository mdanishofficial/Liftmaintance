import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InstallationService } from '../../services/main.service';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import jwt_decode from "jwt-decode";
import { NotificationService } from 'src/services/notification.service';
@Component({
  selector: 'app-banktransfer-modal',
  templateUrl: './banktransfer-modal.page.html',
  styleUrls: ['./banktransfer-modal.page.scss'],
})
export class BanktransferModalPage implements OnInit {
  amount;
  bill_receipt
  billdata:any={};
  constructor(private notifyService : NotificationService,private platform: Platform,private service: InstallationService,private router: Router,public modalController: ModalController) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.modalController.dismiss({
        'dismissed': true
      }).then((data) => {
        console.log('In Modaaaaaal')
       var refresh = true // Here's your selected user!
       this.router.navigateByUrl('detailed_current_malfunctions'+refresh);
   });
    });
   }
   showToasterSuccess(){
    this.notifyService.showSuccess("Submitted Successfully !!", "")
}
 
showToasterError(){
    this.notifyService.showError("Please Fill Price and Attach Receipt",'')
}
 postbill(){
   if(!this.amount||!this.bill_receipt){
     console.log('one thing is not given')
     this.showToasterError()
   }
   else{
    var decoded:any={}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
    const formData = new FormData()
    formData.append('bill_receipt', this.billdata.bill_receipt);
    formData.append('user_id', decoded.user_id);
    formData.append('bill_amount', this.amount);
  console.log(formData)
      this.service.updatebill(formData).subscribe(res => {
       console.log(res)
         })
         this.showToasterSuccess()
         this.modalController.dismiss()
   }
    }
  uploadFiles(e){
    const file = e.target.files[0];
      this.billdata.bill_receipt = file;
      console.log(this.billdata.bill_receipt);
      console.log('An Image Uploaded')
    }
ngOnInit() {
  }
  dismiss() {
    console.log('Modal Dismissed!!!!!!!!!!!!')
     this.modalController.dismiss({
       'dismissed': true
     });
   }
}
