import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-solvedcomplain',
  templateUrl: './solvedcomplain.page.html',
  styleUrls: ['./solvedcomplain.page.scss'],
})
export class SolvedcomplainPage implements OnInit {

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
    this.router.navigateByUrl('/newpendingcomplain');
  }
}
