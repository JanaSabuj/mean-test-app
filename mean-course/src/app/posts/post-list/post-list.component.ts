import { Component, OnInit, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';

import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent  {
  @Output() updatedPostsToEmit = new EventEmitter<Post[]>();
  // posts = [
  //   { title: 'First Post', content: 'C1'},
  //   { title: 'Second Post', content: 'C2'},
  //   { title: 'Third Post', content: 'C3'}
  constructor(private http: HttpClient) {
  }
  // ];
  @Input() posts: Post[] = [];


  // getPosts() {
  //   this.http.get<{message: string , posts: Post[]}>('https://localhost:3000/api/posts')
  //   .subscribe((postData) => {
  //   postData.
  //   });
  // }

   onDelete(postId: any) {
      console.log('Delet hit!');
      this.http.delete<{message: string}>('http://localhost:3000/api/posts/' + postId)
      .subscribe((message) => {
            console.log(message);
            const updatedPosts = this.posts.filter( x => x.id !== postId);
            this.updatedPostsToEmit.emit(updatedPosts);
            // this.posts = updatedPosts;
      });
   }


}
