import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { UpdatepriceModalPage } from '../updateprice-modal/updateprice-modal.page';
import {ActivatedRoute, Router} from "@angular/router";
import { Platform } from '@ionic/angular';
@Component({

  selector: 'app-updatepricecontractdetails',
  templateUrl: './updatepricecontractdetails.page.html',
  styleUrls: ['./updatepricecontractdetails.page.scss'],
})
export class UpdatepricecontractdetailsPage implements OnInit {

  constructor(public activatedRoute: ActivatedRoute,public alertController: AlertController,public modalController: ModalController,private platform: Platform,private router: Router) {
    var refresh=true
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('installation_manager/contracts/'+refresh);
    });
  }

  ngOnInit() {
    console.log('Inside Ng On INit')
      this.sub = this.activatedRoute.params.subscribe(params => {
        this.refresh = params['refresh'];
        console.log(this.refresh)
        if(this.refresh=='true'){
          console.log('Refresh is True')
          this.call_api()
        }
      });
     }
      sub
      refresh
  call_api(){
    var refresh=true
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('installation_manager/contracts/'+refresh);
    });
  }
  new_contract_data=[
    {
client_name:'Shadab Khan',
lift_number:'6',
start_date:'10-10-2022',
end_date:'10-10-2022',
price:'1600 Riyals'
    }
  ]
  previous_contract_data=[
    {
client_name:'Shadab Khan',
lift_number:'6',
start_date:'10-10-2022',
end_date:'10-10-2022',
price:'1600 Riyals'
    }
  ]
  async updateprice(){
    
    console.log('emod property is accessible')
    const modal = await this.modalController.create({
      component: UpdatepriceModalPage ,
      cssClass: 'updateprice'
    });
    modal.onDidDismiss().then((data) => {
      this.call_api()
   });
    return await modal.present();
  }
  async back(){
    var refresh=true
    this.router.navigateByUrl('installation_manager/contracts/'+refresh);
  }
}
