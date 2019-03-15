import { Component,Input, OnInit } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
    @Input() post: Post;
    lastUpdate = new Promise(
    (resolve,reject)=>{
        const date = new Date();
        setTimeout(
            ()=>{
            resolve(date);
        },3000);
    }
    );
    constructor() { }
    ngOnInit() {
        console.log(this.post.content);
    }

    renderColor(){
        if(this.post.loveIts >=0){
            return 'green';
        }else{
            return 'red';
        }
    }

}
