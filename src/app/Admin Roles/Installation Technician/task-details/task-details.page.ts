import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { MapPage } from '../map/map.page';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.page.html',
  styleUrls: ['./task-details.page.scss'],
})
export class TaskDetailsPage implements OnInit {

  constructor(public alertController: AlertController,public modalController: ModalController) {}

  ngOnInit() {
  }
  async update(){
    const modal = await this.modalController.create({
      component: MapPage ,
      cssClass: 'UpdatepaymentModalPage'
    });
    return await modal.present();
  }
}
