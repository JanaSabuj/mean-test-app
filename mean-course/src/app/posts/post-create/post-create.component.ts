import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

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

 onAddPost(form: NgForm) {
    // console.log(this.enteredTitle, this.enteredValue);
    if (form.invalid) {
      return;
    }
    const post: Post  = {
      title: form.value.title,
      content: form.value.content
    };
    // console.log(post);
    this.postCreated.emit(post);
    form.resetForm();
 }

}
