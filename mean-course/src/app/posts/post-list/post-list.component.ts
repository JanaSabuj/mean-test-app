import { Component, OnInit, Input } from '@angular/core';

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
  // ];
  @Input() posts: Post[] = [];
}
