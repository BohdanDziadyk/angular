import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../../models/post/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[];

  constructor(private httpClient: HttpClient) { }
  getPosts(): Observable<Post[]>{
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
  getPostById(id): Observable<Post>{
    return this.httpClient.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
  postFilter(posts: Post[], post: Post): Post[] {
    return posts.filter(value => value.userId === +post.userId || value.id === +post.id);
  }
}
