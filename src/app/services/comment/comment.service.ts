import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comment} from '../../models/comment/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  comments: Comment[];
  constructor(private httpClient: HttpClient) { }

  getComments(): Observable<Comment[]>{
    return this.httpClient.get<Comment[]>('https://jsonplaceholder.typicode.com/comments');
  }
  getCommentById(id): Observable<Comment>{
    return this.httpClient.get<Comment>(`https://jsonplaceholder.typicode.com/comments/${id}`);
  }
  commentFilter(comments: Comment[], comment: Comment): Comment[]{
    return comments.filter(value => value.postId === +comment.postId || value.id === +comment.id);
  }
}
