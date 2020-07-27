import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../models/comment/Comment';
import {AppComponent} from '../app/app.component';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()
  comment: Comment;
  constructor() { }

  ngOnInit(): void {
  }

}
