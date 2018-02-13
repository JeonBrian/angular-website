import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {

  constructor(
    private db: AngularFireDatabase,
    private router: Router
  ) { }

  add(course: HTMLInputElement) {
    this.db.list('/posts').push({
      title: course.value,
      content: 'Fighting game technical information'
    });
    course.value = '';
    this.router.navigate(['/archive']);
  }
}
