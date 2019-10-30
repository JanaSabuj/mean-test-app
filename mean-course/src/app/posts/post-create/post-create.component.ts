import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from '../post.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent  {
  enteredTitle = '';
  enteredValue = '';
  @Output() postCreated = new EventEmitter<Post>();

  constructor(private http: HttpClient) {

  }

 onAddPost(form: NgForm) {
    // console.log(this.enteredTitle, this.enteredValue);
    if (form.invalid) {
      return;
    }
    const post: Post  = {
      id: null,
      title: form.value.title,
      content: form.value.content
    };
    console.log(post);

    // I will post the 'post' variable
    this.http.post<{message: string, postId: string}>('http://localhost:3000/api/posts', post)
    .subscribe((responseData) => {
          console.log(responseData);
          post.id = responseData.postId;
    });
    this.postCreated.emit(post);
    form.resetForm();
 }

}
