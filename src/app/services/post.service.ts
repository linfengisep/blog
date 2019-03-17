import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService{
    data = [new Post(1,'Mon premier post',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
                new Post(2,'Mon deuxième post',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
                new Post(3,'Encore un post',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')]
    constructor() { }

    deleteById(index:number){
        const postToDelete = this.data.find(
            (targetPost)=>{
                return targetPost.id === index;
            }
        )
        const indexInPosts = this.data.indexOf(postToDelete);
        console.log("index in posts:"+indexInPosts);
        this.data.splice(indexInPosts,1);
    }

    getPostById(index:number){
        const post = this.data.find(
            (target) => {
                return target.id === index;
            }
        );
        console.log("post loves:"+post.loveIts+",title:"+post.title);
        return post;
    }

    lovesIncrease(index:number){
        const targetPost = this.data.find(
            (targetPost)=>{
                return targetPost.id === index;
            }
        ).loveIts++;
    }
    lovesDecrease(index:number){
        this.data.find(
            (targetPost)=>{
                return targetPost.id === index;
            }
        ).loveIts--;
    }
}
