import { EventEmitter, Injectable } from "@angular/core";
import { Post } from "./post.model";

@Injectable({providedIn:'root'})
export class PostService{

    listChangedEvent:EventEmitter<Post[]>=new EventEmitter();

    listOfPosts:Post[]=[

        // new Post(
        //   'Nature',
        //   'Nature, in the broadest sense, is the physical world or universe. "Nature" can refer to the phenomena of the physical world, and also to life in general.',
        //   'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg',
        //   'abc@gmail.com',
        //   new Date(),
        //   5
        // ),
    
        // new Post(
        //   'Beautiful nature river',
        //   'Nature, in the broadest sense, is the physical world or universe. "Nature" can refer to the phenomena of the physical world, and also to life in general.',
        //   'https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg',
        //   'igkl@gmail.com',
        //   new Date(),
        //   2
        // ),
    
        // new Post(
        //   'Listening to Nature',
        //   'Nature, in the broadest sense, is the physical world or universe. "Nature" can refer to the phenomena of the physical world, and also to life in general.',
        //   'https://th-thumbnailer.cdn-si-edu.com/XJFrDNlNhvtv1uH-U6FKdBJ_U2U=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/04/8e/048ed839-a581-48af-a0ae-fac6fec00948/gettyimages-168346757_web.jpg',
        //   'efg@gmail.com',
        //   new Date(),
        //   3
        // ),
    
    
             
      ];

      //facility 1
      getPosts(){
        return this.listOfPosts;
      }

      deletePost(index:number){
        this.listOfPosts.splice(index,1)
      }

      addPost(post:Post){
        this.listOfPosts.push(post);
      }

      updatePost(index:number,post:Post){
        this.listOfPosts[index]=post;
      }

      getPost(index:number){
        return this.listOfPosts[index]
      }

      likePost(index:number){
        this.listOfPosts[index].numberOfLikes+=1;
      }

      setPosts(listOfPosts:Post[]){
        this.listOfPosts=listOfPosts;
        this.listChangedEvent.emit(listOfPosts);
      }



}