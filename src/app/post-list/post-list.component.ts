import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
    postsArray : Post[];
    constructor(private postService:PostService) {
        this.postsArray = this.postService.data;
    }
    ngOnInit() {
    }

}
