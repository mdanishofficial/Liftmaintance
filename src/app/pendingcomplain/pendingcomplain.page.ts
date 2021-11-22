import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-pendingcomplain',
  templateUrl: './pendingcomplain.page.html',
  styleUrls: ['./pendingcomplain.page.scss'],
})
export class PendingcomplainPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  async solvedcomplain(){
    this.router.navigateByUrl('/tabs/solvedcomplain');
  }
  async pendingcomplain(){
    this.router.navigateByUrl('/tabs/pendingcomplain');
  }
  newcomplain(){
    console.log('inside new emergency complain')
    this.router.navigateByUrl('/newemergencycomplain');
  }
}
