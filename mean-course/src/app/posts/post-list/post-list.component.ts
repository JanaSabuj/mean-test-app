import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent  {

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
   }


}
