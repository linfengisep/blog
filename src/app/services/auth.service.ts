import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    isAuth = false;
    constructor() { }

    signIn(){
        return new Promise(
        (resolve,rejet)=>{
            setTimeout(
            ()=>{
                this.isAuth = true;
                resolve(true);
            },2000)
        })
    }

    signOut(){
        this.isAuth = false;
    }
}
