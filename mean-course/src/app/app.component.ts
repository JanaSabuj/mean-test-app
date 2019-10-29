import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-course';

  posts = []; // global posts array

  onPostAdded(post) {
    this.posts.push(post);
  }

}
