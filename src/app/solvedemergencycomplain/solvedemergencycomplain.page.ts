import { Component, OnInit } from '@angular/core';
import { InstallationService } from '../../services/main.service';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-solvedemergencycomplain',
  templateUrl: './solvedemergencycomplain.page.html',
  styleUrls: ['./solvedemergencycomplain.page.scss'],
})
export class SolvedemergencycomplainPage implements OnInit {

  constructor(private platform: Platform,private service: InstallationService,private router: Router){
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('tabs/tab1');
    });
    let payload = {
      user_id: "123",
      complain_type:'emergency'
    }
    this.service.getsolvedcomplains(payload).subscribe(res => {
     this.complain_data = res;
  console.log(this.complain_data)
    })
  }
  complain_data


  ngOnInit() {
  }
  async solved(){
    this.router.navigateByUrl('/tabs/solvedemergencycomplain');
  }
  async pending(){
    this.router.navigateByUrl('/tabs/pendingemergencycomplain');
  }
  newcomplain(){
    console.log('inside new emergency complain')
    this.router.navigateByUrl('/newpendingcomplain');
  }
}
