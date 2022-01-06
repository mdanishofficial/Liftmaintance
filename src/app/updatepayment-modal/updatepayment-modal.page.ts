import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InstallationService } from '../../services/main.service';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-updatepayment-modal',
  templateUrl: './updatepayment-modal.page.html',
  styleUrls: ['./updatepayment-modal.page.scss'],
})
export class UpdatepaymentModalPage implements OnInit {
  amount;
  billdata:any={};
  constructor(private platform: Platform,private service: InstallationService,private router: Router,public modalController: ModalController) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.modalController.dismiss({
        'dismissed': true
      }).then((data) => {
        console.log('In Modaaaaaal')
       var refresh = true // Here's your selected user!
       this.router.navigateByUrl('tabs/paidbills/'+refresh);
   });;
    });
   }
  
   postbill(){
    
    // console.log(this.bill_receipt)
    var decoded:any={}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
    const formData = new FormData()
    formData.append('bill_receipt', this.billdata.bill_receipt);
    formData.append('user_id', decoded.user_id);
    formData.append('bill_amount', this.amount);
  // let payload = {
    //  user_id:decoded.user_id,
    //  bill_amount:this.amount
    // }
    console.log(formData)
      this.service.updatebill(formData).subscribe(res => {
       console.log(res)
         })
         var refresh=true
         this.modalController.dismiss(refresh)
        }
  ngOnInit() {
  }
  uploadFiles(e){
  const file = e.target.files[0];
    this.billdata.bill_receipt = file;
    console.log(this.billdata.bill_receipt);
    console.log('An Image Uploaded')
  }
  dismiss() {
    console.log('Modal Dismissed!!!!!!!!!!!!')
    // let data={'dismissed': true,refresh:true}
    var refresh=true
     this.modalController.dismiss(refresh)
  //    .then((data) => {
  //      console.log('In Modaaaaaal')
  //     var refresh = true // Here's your selected user!
  //     this.router.navigateByUrl('tabs/paidbills/'+refresh);
  // });
   }
}
