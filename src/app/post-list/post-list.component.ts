import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
    postsArray : Post[];
    postSubscription : Subscription;

    constructor(private postService:PostService) {
    //    this.postsArray = this.postService.data;
    }
    ngOnInit() {
        this.postSubscription = this.postService.postSubject.subscribe(
            (posts)=>{
            this.postsArray = posts;
        });
        this.postService.emitPostSubject();
    }

}
