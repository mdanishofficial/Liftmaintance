import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import jwt_decode from "jwt-decode";
import { SplashScreen } from '@capacitor/splash-screen';
@Injectable({
  providedIn: 'root'
})
export class AutoactivateLoginGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('In Guard')
      var decoded:any={}
      try{
        var retrievedtoken = localStorage.getItem('token') || ""
        decoded = jwt_decode(retrievedtoken);
        console.log(retrievedtoken)
    
        if(retrievedtoken=='' ){
          console.log('User Not Logged In')
        }
        else{
          console.log('User Logged In')
          if(decoded.user_role=='client'){
            // var controlled=false
            // this.router.navigateByUrl('menu-tabs/tab1');
              var accepted=localStorage.getItem('accepted')
            if(accepted=='true'){
              console.log('accepted is true')
              return true;
            }
            else{
              var controlled=false
          this.router.navigateByUrl('contract_details/'+controlled);
          return false;
            }
          }
          if(decoded.user_role=='installation_manager'){
            this.router.navigateByUrl('installation_manager/menu');
            return false;
          }
        }
      }
      catch{
        console.log('Error');
        this.router.navigateByUrl('login');
        return false;
      }
  }
  
}
