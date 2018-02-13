import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent {
  courses$;

  constructor(private db: AngularFireDatabase) {
    this.courses$ = db.list('/posts').snapshotChanges();
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
