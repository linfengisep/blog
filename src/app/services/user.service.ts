import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Subscription,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService{
    private users : User[] = [{
        firstName:"james",
        lastName:"Harden",
        mail:"james.harden@gmail.com",
        drinkPreference:"café",
        hobbies:["programing","swimming","basket"]
    }];
    userSubject = new Subject<User[]>();
    userSubscription: Subscription;
    emitUsers(){
        this.userSubject.next(this.users.slice());
    }
    addUser(user:User){
        this.users.push(user);
        this.emitUsers();
    }
}
