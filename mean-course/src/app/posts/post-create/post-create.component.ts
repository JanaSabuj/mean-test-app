import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent  {
  newPost = '';
  enteredValue = '';

 onAddPost() {
  //  console.dir(postInput);
  // alert('Post is Added');
   this.newPost = this.enteredValue;
 }

}
