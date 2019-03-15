import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
    @Input() postsArr : Post[];

    constructor() { }
    ngOnInit() {
        //console.log("post array length:"+this.postsArr.lenth);
    }

}
