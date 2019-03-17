import { Component,Input, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';
@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
    @Input() post: Post;
    constructor(private postService:PostService) { }
    ngOnInit() {
        //console.log("post index:"+this.post.id);
    }

    renderColor(){
        if(this.post.loveIts >=0){
            return 'green';
        }else{
            return 'red';
        }
    }

    increase(){
        this.postService.lovesIncrease(this.post.id);
        console.log("this.post.id:"+this.post.id+",loves number:"+this.post.loveIts);
    }

    decrease(){
        this.postService.lovesDecrease(this.post.id);
        console.log("post title:"+this.post.title+",loves number:"+this.post.loveIts);
    }
    delete(){
        //console.log("id:"+this.post.id);
        this.postService.deleteById(this.post.id);
     }
}
