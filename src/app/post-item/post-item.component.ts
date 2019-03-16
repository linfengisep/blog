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
    @Input() index : number;
    constructor(private postService:PostService) { }
    ngOnInit() {
        console.log("post index:"+this.index);
    }

    renderColor(){
        if(this.post.loveIts >=0){
            return 'green';
        }else{
            return 'red';
        }
    }

    increase(){
        this.post.loveIts++;
        console.log("post title:"+this.post.title+",loves number:"+this.post.loveIts);
    }

    decrease(){
        this.post.loveIts--;
        console.log("post title:"+this.post.title+",loves number:"+this.post.loveIts);
    }
    delete(){
        console.log("index:"+this.index);
        this.postService.deleteByIndex(this.index);
     }
}
