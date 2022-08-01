import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.isAuth()){
        return true;
      }else{
        this.router.navigateByUrl('/login')
        return false;
      }
  }

  isAuth(){
    // this method must return a booleanbased on JWT token  
    // Strored in the storage (localStorage)
    return true;
  }
  
}
