import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-inquiries',
  templateUrl: './inquiries.page.html',
  styleUrls: ['./inquiries.page.scss'],
})
export class InquiriesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  async inquiries(){
    this.router.navigateByUrl('/tabs/inquiries');
  }
  async faqs(){
    this.router.navigateByUrl('/tabs/faqs');
  }
  newinquiry(){
    console.log('inside new emergency complain')
    this.router.navigateByUrl('/newinquiries');
  }
}

