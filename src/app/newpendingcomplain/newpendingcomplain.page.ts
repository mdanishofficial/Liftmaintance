import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-newpendingcomplain',
  templateUrl: './newpendingcomplain.page.html',
  styleUrls: ['./newpendingcomplain.page.scss'],
})
export class NewpendingcomplainPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  back(){
    this.router.navigateByUrl('tabs/solvedcomplain');
  }
}
