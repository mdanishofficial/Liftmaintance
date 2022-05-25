import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Platform } from '@ionic/angular';
declare let $ : any;
@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {
language='English';
collapse=false;
  constructor(private platform: Platform,private router: Router) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('menu-tabs/tab1');
     });
  }
  ngOnInit() {
  }
  passvalue(value){
    $("#collapseTwo").collapse('hide');
    this.language=value
    console.log(this.language)
  }
  collapsetrue(){
    console.log('Inside Collapse True')
    this.collapse=false
  }
  public selectLanguage(event: any){
    // this.translateService.use(event.target.value);
  }
}
