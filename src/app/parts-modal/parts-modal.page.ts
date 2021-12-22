import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InstallationService } from '../../services/main.service';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-parts-modal',
  templateUrl: './parts-modal.page.html',
  styleUrls: ['./parts-modal.page.scss'],
})
export class PartsModalPage implements OnInit {

  constructor(private platform: Platform,private service: InstallationService,private router: Router,public modalController: ModalController) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.modalController.dismiss({
        'dismissed': true
      });
    });
   }
  radiovalue

  ngOnInit() {
  }
  dismiss() {
    console.log('Modal Dismissed!!!!!!!!!!!!')
     this.modalController.dismiss({
       'dismissed': true
     });
   }
  
   addparts(){
   let payload = {
      user_id: "123",
      provided_part:this.radiovalue
    }
    console.log(payload)
    this.service.addmalfunctionparts(payload).subscribe(res => {
     this.malfunction_data = res;
        console.log(this.malfunction_data)
      })
      this.modalController.dismiss({
        'dismissed': true
      });
   }
   malfunction_data
}
