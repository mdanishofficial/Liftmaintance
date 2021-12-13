import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-newemergencycomplain',
  templateUrl: './newemergencycomplain.page.html',
  styleUrls: ['./newemergencycomplain.page.scss'],
})
export class NewemergencycomplainPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  back(){
    this.router.navigateByUrl('tabs/pendingcomplain');
  }
}
