// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Outside
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// Environment
import { environment } from '../environments/environment';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewPostComponent } from './new-post/new-post.component';
import { ArchiveComponent } from './archive/archive.component';
import { NewPostFormComponent } from './new-post-form/new-post-form.component';
import { ReversePipe } from './reverse-pipe.pipe';

const appRoutes: Routes = [
  { path: '', component: ArchiveComponent },
  { path: 'archive', component: ArchiveComponent },
  { path: 'login', component: LoginComponent },
  { path: 'new', component: NewPostComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    NewPostComponent,
    ArchiveComponent,
    NewPostFormComponent,
    ReversePipe
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } <-- debugging purposes only
    ),
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
