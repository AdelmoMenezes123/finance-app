import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class SampleGuardService implements CanActivate{
  constructor(
    private router: Router,
  ){}
  
  canActivate(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ): Observable<boolean>|boolean{
    if(!!window.localStorage.getItem('currentUser')){
      return true
    }

    this.router.navigate(['/login'])

    return false
  }
}


// router:Router;
//     let acesso = true;
//     if(!window.localStorage.getItem('currentUser')){
//       acesso = false;//this.router.navigate(['/login']);
//       return acesso
//     }
//     return acesso;