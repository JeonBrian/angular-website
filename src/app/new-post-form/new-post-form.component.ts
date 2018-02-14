import { Component } from '@angular/core';

import { Post } from '../post';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'new-post-form',
  templateUrl: './new-post-form.component.html',
  styleUrls: ['./new-post-form.component.css']
})
export class NewPostFormComponent {

  categories = ['Neutral Game', 'Okizemi',
            'Frame Trap', 'Combo'];

  model = new Post('', '', this.categories[0]);

  submitted = false;

  constructor(
    private db: AngularFireDatabase,
    private router: Router
  ) { }

  onSubmit(form) {
    console.log('SUBMIT');
    console.log(this.model);

    this.db.list('/posts').push(this.model);
    this.router.navigate(['/archive']);
  }

  newPost() {
    console.log('NEW POST');
    this.model = new Post('', 'CO', this.categories[2]);
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
