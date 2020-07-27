import { Component } from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {User} from '../../models/user/User';
import {Post} from '../../models/post/Post';
import {Comment} from '../../models/comment/Comment';
import {PostService} from '../../services/post/post.service';
import {CommentService} from '../../services/comment/comment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User = {};
  post: Post = {};
  comment: Comment = {};
  users: User[];
  posts: Post[];
  comments: Comment[];
  filteredUsers: User[];
  filteredPosts: Post[];
  filteredComments: Comment[];
  constructor(private userService: UserService, private postService: PostService, private commentService: CommentService) {
    this.userService.getUsers().subscribe(value => this.users = value);
    this.postService.getPosts().subscribe(value => this.posts = value);
    this.commentService.getComments().subscribe(value => this.comments = value);
  }
  getUser(): void {
    this.userService.getUsers().subscribe(values => {
      this.filteredUsers = this.userService.usersFilter(values, this.user);
    });
  }

  getPost(): void {
    this.postService.getPosts().subscribe(values => {
      this.filteredPosts = this.postService.postFilter(values, this.post);
      console.log(this.filteredPosts);
    });
  }

  getComment(): void {
    this.commentService.getComments().subscribe(values => {
      this.filteredComments = this.commentService.commentFilter(values, this.comment);
      console.log(this.filteredComments);
    });
  }

  test(postForm): void{
    console.log(postForm);
  }
}
