import { Component, OnInit } from '@angular/core';
import { InstallationService } from '../../services/main.service';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import jwt_decode from "jwt-decode";
import {ChangeDetectorRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pendingemergencycomplain',
  templateUrl: './pendingemergencycomplain.page.html',
  styleUrls: ['./pendingemergencycomplain.page.scss'],
})
export class PendingemergencycomplainPage implements OnInit {

  constructor(public activatedRoute: ActivatedRoute,private cdr:ChangeDetectorRef,private platform: Platform,private service: InstallationService,private router: Router){
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('tabs/tab1');
    });
    this.call_api()
    }
  complain_data

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
    var decoded:any={}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
    console.log(decoded)
    let payload = {
     user_id:decoded.user_id,
     complain_type:'emergency'
    }

    this.service.getpendingcomplains(payload).subscribe(res => {
     this.complain_data = res;
  console.log(this.complain_data)
 
    })
  }
  async solved(){
    this.router.navigateByUrl('/tabs/solvedemergencycomplain');
  }
  async pending(){
    var refresh=false
    this.router.navigateByUrl('/tabs/pendingemergencycomplain/'+refresh);
  }
  newemergencycomplain(){
    console.log('inside new emergency complain')
    this.router.navigateByUrl('/newemergencycomplain');
  }
}
