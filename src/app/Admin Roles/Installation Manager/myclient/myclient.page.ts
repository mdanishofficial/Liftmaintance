import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-myclient',
  templateUrl: './myclient.page.html',
  styleUrls: ['./myclient.page.scss'],
})
export class MyclientPage implements OnInit {

  constructor(public activatedRoute: ActivatedRoute,private platform: Platform,private router: Router) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('installation_manager/menu');
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
        this.platform.backButton.subscribeWithPriority(10, () => {
          this.router.navigateByUrl('installation_manager/menu');
        });
      }
  clientlisting(){
    var refresh=true
    this.router.navigateByUrl('installation_manager/clientlisting/'+refresh);
  }
  contracts(){
    var refresh=true
    this.router.navigateByUrl('installation_manager/contracts/'+refresh);
  }
}
