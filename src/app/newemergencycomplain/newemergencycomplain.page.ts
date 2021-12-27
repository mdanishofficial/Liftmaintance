import { Component, OnInit } from '@angular/core';
import { InstallationService } from '../../services/main.service';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import {formatDate} from '@angular/common';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-newemergencycomplain',
  templateUrl: './newemergencycomplain.page.html',
  styleUrls: ['./newemergencycomplain.page.scss'],
})
export class NewemergencycomplainPage implements OnInit {
  malfunction_type=''
  complaindetail
  
  constructor(private platform: Platform,private service: InstallationService,private router: Router){
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('tabs/pendingemergencycomplain');
    });
  }
  send_complain(){
    var date =formatDate(new Date(), 'yyyy-MM-dd', 'en');
    console.log(date)
    var decoded:any={}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
    console.log(decoded)
 
    let payload={
malfunction_type:this.malfunction_type,
complain_detail:this.complaindetail,
complain_type:'emergency',
complain_status:'pending',
complain_date:date,
user_id:decoded.user_id,
  }
    this.service.addcomplain(payload).subscribe(res => {
     console.log(res)
     })
  }
  ngOnInit() {
  }
  back(){
    this.router.navigateByUrl('tabs/pendingemergencycomplain');
  }
}
