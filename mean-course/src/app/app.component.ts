import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './posts/post.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mean-course';

  storedPosts: Post[] = []; // global posts array

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getPosts();
    console.log(this.storedPosts);
  }

  onPostAdded(post: Post) {
    this.storedPosts.push(post);
    console.log(this.storedPosts);
  }


  getPosts() {
    this.http.get<{message: string , posts: any}>
    ('http://localhost:3000/api/posts')
    .pipe(map( (postData: any) => {
        return postData.posts.map(post => {
          return {
            title: post.title,
            content: post.content,
            id: post._id
          };
        });
    }))
    .subscribe((jsonData: Post[]) => {
        //  for (let i = 0; i < postData.posts.length; i++) {
        //    this.storedPosts.push(postData[i]);
        //  }
        // const jsonData = postData.posts;
        // console.log(jsonData); // getting the posts
        // for (let x = 0; x < jsonData.length; x++) {
        //   this.storedPosts.push(jsonData[x]);
        // }
        for (const obj of jsonData) {
          this.storedPosts.push(obj);
        }
        console.log(jsonData);
    });
  }

}
