import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  courses$;

  constructor(private db: AngularFireDatabase) {
    this.courses$ = db.list('/posts').snapshotChanges();
  }

  add(course: HTMLInputElement) {
    this.db.list('/posts').push({
      name: 'NEW COURSE',
      age: 20,
      isLive: true,
      sections: [
        { title: 'Components' },
        { title: 'Directives' },
        { title: 'Templates' }
      ]
    });
    course.value = '';
  }

  update(course) {
    this.db.object('/posts/' + course.payload.key)
      .update({
        name: 'UPDATED NAME',
        age: course.payload.val().age + 1
      });
  }

  delete(course) {
    this.db.object('/posts/' + course.payload.key)
      .remove()
      .then(x => console.log('DELETED'));
  }
}
