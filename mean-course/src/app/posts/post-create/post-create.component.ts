import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent  {
  newPost = '';

 onAddPost(postInput: HTMLTextAreaElement) {
   console.dir(postInput);
  // alert('Post is Added');
   this.newPost = postInput.value;
 }

}
