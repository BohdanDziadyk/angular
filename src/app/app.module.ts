import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './ components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { UserComponent } from './ components/user/user.component';
import { CommentComponent } from './ components/comment/comment.component';
import {PostComponent} from './ components/post/post.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CommentComponent,
    PostComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: 'users', component: UserComponent},
            {path: 'posts', component: PostComponent},
            {path: 'comments', component: CommentComponent}
        ]),
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
