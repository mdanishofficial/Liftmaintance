import { Component, OnInit,Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InstallationManagerServicesService } from '../../../../services/installation-manager-services.service';
import { Platform } from '@ionic/angular';
import { NotificationService } from '../../../../services/notification.service';
@Component({
  selector: 'app-forwardmalfunctions-modal',
  templateUrl: './forwardmalfunctions-modal.page.html',
  styleUrls: ['./forwardmalfunctions-modal.page.scss'],
})
export class ForwardmalfunctionsModalPage implements OnInit {
  @Input() malfunction_id: string;
  constructor(private notifyService : NotificationService,private platform: Platform,public modalController: ModalController,private service: InstallationManagerServicesService) { 
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.modalController.dismiss({
        'dismissed': true
      });
    });
  }
  installation_technician=''
  malfunction_details=''
  showToasterSuccess(){
    this.notifyService.showSuccess("Malfunction Type Updated Successfully !!", "")
}
 
showToasterError(){
    this.notifyService.showError("Please Select Technician To Assign Malfunction",'')
}
  ngOnInit() {
  }
  radioValue;
  radioGroupChange(e){
   
    // console.log(e.detail.value)
    this.radioValue=e.detail.value
  }
  installation_technicians=[
    {
      technician_name:'Hassan Ali'
    },
    {
      technician_name:'Shadab Khan'
    },
  ]
  update(){
    let payload = {
         malfunction_id:this.malfunction_id,
         technician_assigned:this.installation_technician,
         malfunction_details:this.malfunction_details
      }
      if(this.installation_technician==''){
        this.showToasterError();
      }
      else{
        this.service.assign_technician(payload).subscribe(res => {
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
