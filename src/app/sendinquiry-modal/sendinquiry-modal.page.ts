import { Component, OnInit } from '@angular/core';
import { InstallationService } from '../../services/main.service';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-sendinquiry-modal',
  templateUrl: './sendinquiry-modal.page.html',
  styleUrls: ['./sendinquiry-modal.page.scss'],
})
export class SendinquiryModalPage implements OnInit {

  constructor(private platform: Platform,private service: InstallationService,private router: Router,public modalController: ModalController) {
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

  ngOnInit() {
  }
  dismiss() {
    console.log('Modal Dismissed!!!!!!!!!!!!')
     this.modalController.dismiss({
       'dismissed': true
     });
   }
}
