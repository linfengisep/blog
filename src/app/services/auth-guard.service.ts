import { ActivatedRouteSnapshot, RouterStateSnapshot, Router ,CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private authService:AuthService,
                private router:Router){}
    canActivate(
       route: ActivatedRouteSnapshot,
       state: RouterStateSnapshot
    ):Observable<boolean> | Promise<boolean> | boolean {
            if(this.authService.isAuth){
                return true;
            }else{
                this.router.navigate(['/auth']);
            }
        }
}
