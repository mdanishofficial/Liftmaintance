import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InstallationService } from '../../services/main.service';
@Component({
  selector: 'app-banktransfer-modal',
  templateUrl: './banktransfer-modal.page.html',
  styleUrls: ['./banktransfer-modal.page.scss'],
})
export class BanktransferModalPage implements OnInit {
  amount;
  image
  constructor(private service: InstallationService,public modalController: ModalController) { }
  uploadFiles(e){
console.log(e)
  }
 postbill(){
  console.log(this.image)
    let payload = {
      user_id: "123",
      bill_amount:this.amount
    }
    this.service.updatebill(payload).subscribe(res => {
     console.log(res)
       })
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
