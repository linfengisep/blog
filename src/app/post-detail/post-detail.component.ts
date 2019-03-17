import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})

export class PostDetailComponent implements OnInit {
    numberLoves:number;
    creationTime:Date;
    postTitle = null;
    constructor(private postService:PostService,private route:ActivatedRoute) { }

    ngOnInit() {
        const id = this.route.snapshot.params['id'];
        this.numberLoves = this.postService.getPostById(+id).loveIts;
        this.postTitle = this.postService.getPostById(+id).title;
        this.creationTime = this.postService.getPostById(+id).created_at;
    }

}
