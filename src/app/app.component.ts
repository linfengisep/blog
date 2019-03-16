import { Component,OnInit } from '@angular/core';
import { Post } from './models/post';

import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    myPosts : any[];
    constructor(private postService:PostService){
    }
    ngOnInit(){
    this.myPosts = this.postService.data;
    }
}
