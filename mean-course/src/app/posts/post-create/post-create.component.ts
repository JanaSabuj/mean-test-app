import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent  {
  enteredTitle = '';
  enteredValue = '';

 onAddPost() {
    console.log(this.enteredTitle, this.enteredValue);
 }

}
