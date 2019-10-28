import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent  {
  newPost = '';

 onAddPost() {
   console.log('Post is added!!');
  // alert('Post is Added');
   this.newPost = 'The user\'s post is added';
 }

}
