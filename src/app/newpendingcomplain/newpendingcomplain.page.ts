import { Component, OnInit } from '@angular/core';
import { InstallationService } from '../../services/main.service';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import {formatDate} from '@angular/common';
@Component({
  selector: 'app-newpendingcomplain',
  templateUrl: './newpendingcomplain.page.html',
  styleUrls: ['./newpendingcomplain.page.scss'],
})
export class NewpendingcomplainPage implements OnInit {
  malfunction_type=''
  complaindetail
  
  constructor(private platform: Platform,private service: InstallationService,private router: Router){
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('tabs/solvedcomplain');
    });
  }

  ngOnInit() {
   
  }
  send_complain(){
    var date =formatDate(new Date(), 'yyyy-MM-dd', 'en');
    console.log(date)
    let payload={
malfunction_type:this.malfunction_type,
complain_detail:this.complaindetail,
complain_type:'normal',
complain_status:'pending',
complain_date:date,
  }
    this.service.addcomplain(payload).subscribe(res => {
     console.log(res)
     })
  }
  back(){
    this.router.navigateByUrl('tabs/solvedcomplain');
  }
}
