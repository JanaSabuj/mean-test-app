import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent  {
  enteredTitle = '';
  enteredValue = '';
  @Output() postCreated = new EventEmitter();

 onAddPost() {
    // console.log(this.enteredTitle, this.enteredValue);
     const post: any  = {
      title: this.enteredTitle,
      content: this.enteredValue
    };
    // console.log(post);
     this.postCreated.emit(post);
 }

}
