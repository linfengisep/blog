import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
    constructor(private postService:PostService,private router:Router) { }

    ngOnInit() {
    }

    onSubmit(form:NgForm){
        this.postService.createPost(form.value['title'],form.value['content']);
        //console.log("post filled:"+form.value.title);
        this.router.navigate(['posts']);
    }
}
