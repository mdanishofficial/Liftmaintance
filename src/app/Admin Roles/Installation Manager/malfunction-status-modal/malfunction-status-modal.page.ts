import { Component, OnInit,Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NotificationService } from '../../../../services/notification.service';
import { InstallationManagerServicesService } from '../../../../services/installation-manager-services.service';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-malfunction-status-modal',
  templateUrl: './malfunction-status-modal.page.html',
  styleUrls: ['./malfunction-status-modal.page.scss'],
})
export class MalfunctionStatusModalPage implements OnInit {
  @Input() malfunction_id: string;
  malfunction_status=''
  constructor(private notifyService : NotificationService,private platform: Platform,public modalController: ModalController,private service: InstallationManagerServicesService) { 
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.modalController.dismiss({
        'dismissed': true
      });
    });
  }
  ngOnInit() {
  }
  showToasterSuccess(){
    this.notifyService.showSuccess("Malfunction Type Updated Successfully !!", "")
}
 
showToasterError(){
    this.notifyService.showError("Please Select Malfunction Type",'')
}
  radioValue;
  radioGroupChange(e){
   
    console.log(e.detail.value)
    this.radioValue=e.detail.value
  }
  update(){
    let payload = {
         malfunction_id:this.malfunction_id,
         malfunction_status:this.malfunction_status,
      }
      console.log(payload)
      if(this.malfunction_status==''){
        this.showToasterError();
      }
      else{
        this.service.update_malfunction_status(payload).subscribe(res => {
          console.log(res)
            })
            this.showToasterSuccess();
            this.modalController.dismiss({
              'dismissed': true
            });
      }
    
      }
  dismiss() {
    console.log('Modal Dismissed!!!!!!!!!!!!')
     this.modalController.dismiss({
       'dismissed': true
     });
   }
}
