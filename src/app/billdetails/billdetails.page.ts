import { Component, OnInit } from '@angular/core';
import {paynow_modalPage} from '../paynow_modal/paynow-modal.page';
import { InstallationService } from '../../services/main.service';
import { Router } from "@angular/router";
import { Platform } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import jwt_decode from "jwt-decode";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-billdetails',
  templateUrl: './billdetails.page.html',
  styleUrls: ['./billdetails.page.scss'],
})
export class BilldetailsPage implements OnInit {

  constructor(public activatedRoute: ActivatedRoute, private platform: Platform, private service: InstallationService, private router: Router, public modalController: ModalController) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      var refresh = false
      this.router.navigateByUrl('tabs/unpaidbills/' + refresh);
    });
    var decoded: any = {}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
    console.log(decoded)
    let payload = {
      user_id: decoded.user_id,
    }
    this.service.getunpaidbills(payload).subscribe(res => {
      this.bill_data = res;
      console.log(this.bill_data)
    })

  }
  bill_data
  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
    });
  }
  sub
  id
  async presentModalUpdatePayment() {

    console.log('emod property is accessible')
    const modal = await this.modalController.create({
      component: paynow_modalPage,
      cssClass: 'updatePayment'
    });
    return await modal.present();
  }
  back() {
    var refresh = false
    this.router.navigateByUrl('tabs/unpaidbills/' + refresh);
  }
}
