import { Component, OnInit,Input  } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InstallationManagerServicesService } from '../../../../services/installation-manager-services.service';
import { Platform } from '@ionic/angular';
import { NotificationService } from '../../../../services/notification.service';
@Component({
  selector: 'app-malfunction-level-modal',
  templateUrl: './malfunction-level-modal.page.html',
  styleUrls: ['./malfunction-level-modal.page.scss'],
})
export class MalfunctionLevelModalPage implements OnInit {
  malfunction_level=''
  @Input() malfunction_id: string;
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
    this.notifyService.showError("Please Select Malfunction Level",'')
}
  radioValue;
  radioGroupChange(e){
   
    // console.log(e.detail.value)
    this.radioValue=e.detail.value
  }
  update(){
    let payload = {
         malfunction_id:this.malfunction_id,
         malfunction_level:this.malfunction_level,
      }
      console.log(payload)
      if(this.malfunction_level==''){
        this.showToasterError();
      }
      else{
        this.service.update_malfunction_level(payload).subscribe(res => {
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
