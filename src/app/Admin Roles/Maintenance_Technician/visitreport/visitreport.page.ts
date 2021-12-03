import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { NotvisitedModalPage } from '../notvisited-modal/notvisited-modal.page'
@Component({
  selector: 'app-visitreport',
  templateUrl: './visitreport.page.html',
  styleUrls: ['./visitreport.page.scss'],
})
export class VisitreportPage implements OnInit {

  constructor(public alertController: AlertController,public modalController: ModalController) {}

  ngOnInit() {
  }
  async notvisited(){
    const modal = await this.modalController.create({
      component: NotvisitedModalPage ,
      cssClass: 'notvisited'
    });
    return await modal.present();
  }
}
