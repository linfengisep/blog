import { Component,OnInit,OnDestroy } from '@angular/core';
import { Post } from './models/post';

import { PostService } from './services/post.service';

import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy{
    seconds : number;
    counterSubscription : Subscription;

    constructor(private postService:PostService){
    }
    ngOnInit(){
        // const counter = Observable.interval(1000);
        // this.counterSubscription = counter.subscribe(
        //     (value:number)=>{
        //         this.seconds = value;
        //     }
        // );
    }

    ngOnDestroy(){
        //this.counterSubscription.unsubscribe();
    }
}
