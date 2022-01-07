import { Component, OnInit } from '@angular/core';
import { InstallationService } from '../../services/main.service';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import jwt_decode from "jwt-decode";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-solvedemergencycomplain',
  templateUrl: './solvedemergencycomplain.page.html',
  styleUrls: ['./solvedemergencycomplain.page.scss'],
})
export class SolvedemergencycomplainPage implements OnInit {

  constructor(public activatedRoute: ActivatedRoute,private platform: Platform,private service: InstallationService,private router: Router){
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
        this.platform.backButton.subscribeWithPriority(10, () => {
          this.router.navigateByUrl('tabs/tab1');
        });
           var decoded:any={}
        var retrievedtoken = localStorage.getItem('token') || ""
        decoded = jwt_decode(retrievedtoken);
        console.log(decoded)
        let payload = {
         user_id:decoded.user_id,
         complain_type:'emergency'
        }
        this.service.getsolvedcomplains(payload).subscribe(res => {
         this.complain_data = res;
      console.log(this.complain_data)
        })
    
      }
  async solved(){
    var refresh=true
    this.router.navigateByUrl('/tabs/solvedemergencycomplain/'+refresh);
  }
  async pending(){
    var refresh=true
    this.router.navigateByUrl('/tabs/pendingemergencycomplain/'+refresh);
  }
  newcomplain(){
    console.log('inside new emergency complain')
    this.router.navigateByUrl('/newemergencycomplain');
  }
}
