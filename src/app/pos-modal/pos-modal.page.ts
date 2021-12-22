import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InstallationService } from '../../services/main.service';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-pos-modal',
  templateUrl: './pos-modal.page.html',
  styleUrls: ['./pos-modal.page.scss'],
})
export class PosModalPage implements OnInit {

  constructor(private platform: Platform,private service: InstallationService,private router: Router,public modalController: ModalController) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.modalController.dismiss({
        'dismissed': true
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
   onCodeChanged(code: string) {
    console.log('Code Changed')
  }
   onCodeCompleted(code: string) {
     console.log('Code Completed')
  }
  updateList(ev){
    var target = ev.srcElement;
    var maxLength = parseInt(target.attributes["maxlength"].value,10);
    var myLength = target.value.length;
    if (myLength >= maxLength) {
        var next = target;
        while (next = next.nextElementSibling) {
            if (next == null)
            break;
            if (next.tagName.toLowerCase() == "input") {
              next.focus();
            break;
          }
        }
    }
}
}
