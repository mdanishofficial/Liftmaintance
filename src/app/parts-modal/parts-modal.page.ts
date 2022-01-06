import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InstallationService } from '../../services/main.service';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-parts-modal',
  templateUrl: './parts-modal.page.html',
  styleUrls: ['./parts-modal.page.scss'],
})
export class PartsModalPage implements OnInit {

  constructor(private platform: Platform,private service: InstallationService,private router: Router,public modalController: ModalController) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.modalController.dismiss({
        'dismissed': true
      }).then((data) => {
        console.log('In Modaaaaaal')
       var refresh = true // Here's your selected user!
       this.router.navigateByUrl('detailed_current_malfunctions'+refresh);
   });;
    });
    var decoded:any={}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
    let payload = {
      user_id:decoded.user_id,
    }

    this.service.getparts(payload).subscribe(res => {
      this.parts_data = res;
         console.log(this.parts_data)
         for(var i=0;i<this.parts_data.length;i++){
          this.form.push({part_name:this.parts_data[i].part_name,isChecked:this.parts_data[i].provided})
        }
       })
  
    console.log('this.form')
   }
  radiovalue

  ngOnInit() {
  }
  dismiss() {
    console.log('Modal Dismissed!!!!!!!!!!!!')
     this.modalController.dismiss({
       'dismissed': true
     });
   }
  
   addparts(){
    
  var decoded:any={}
    var retrievedtoken = localStorage.getItem('token') || ""
    decoded = jwt_decode(retrievedtoken);
    console.log(this.form.length)
    for(var i=0;i<this.form.length;i++){
if(this.form[i].isChecked==true){
  this.parts[i]=this.form[i]
}
}
console.log(this.parts)
   let payload = {
      user_id:decoded.user_id,
      provided_parts:this.parts
    }
    console.log(payload)
    this.service.updateparts(payload).subscribe(res => {
     this.malfunction_data = res;
        console.log(this.malfunction_data)
      })
      this.modalController.dismiss({
        'dismissed': true
      });
      this.service.filter('Dismiss')
   }
   malfunction_data
   parts_data
   parts=[]
   public form = [
    // { val: 'Door Card', isChecked: false },
    // { val: 'Gallon', isChecked: false },
    // { val: 'Door Fork', isChecked: false }
];

  // form[0].isChecked=true

  }

