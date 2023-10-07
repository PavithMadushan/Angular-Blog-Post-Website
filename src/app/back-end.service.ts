import { Injectable } from "@angular/core";
import { PostService } from "./post.services";
import { Post } from "./post.model";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators"


// Database Path
// https://live-posts-ca7b2-default-rtdb.firebaseio.com/

@Injectable({providedIn:'root'})
export class BackEndService{
    constructor(private postService:PostService, private http: HttpClient){}

    //functionality 1 - Save
    saveData(){
        //step 1-get list of posts from post.service
        const listOfPosts:Post[]=this.postService.getPosts();

        //step 2-send list of posts to backend
        this.http.put('https://live-posts-ca7b2-default-rtdb.firebaseio.com/posts.json',
        listOfPosts)
        .subscribe((res)=>{console.log(res)});
    }

    //functionality 2 - Save
    fetchData(){
        //step 1
        this.http.get<Post[]>("https://live-posts-ca7b2-default-rtdb.firebaseio.com/posts.json")
        .pipe(
            tap((listOfPosts:Post[])=>{
                console.log(listOfPosts);

                //Step 2 - Send to post.service
                this.postService.setPosts(listOfPosts);
            })
        ).subscribe();
    }
}