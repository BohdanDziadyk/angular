import { Component } from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {User} from '../../models/user/User';
import {Post} from '../../models/post/Post';
import {Comment} from '../../models/comment/Comment';
import {PostService} from '../../services/post/post.service';
import {CommentService} from '../../services/comment/comment.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  password =  new FormControl('', [Validators.required, Validators.maxLength(16), Validators.minLength(8)]);
  confirmPassword = new FormControl('', [Validators.required]);
  constructor() {
    this.form = new FormGroup({
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    }, this.passConf.bind(this));
  }
  login(form: FormGroup): void {
    console.log(form);
  }
  passConf(form: FormGroup): null | object{
    const {value: password} = form.controls.password;
    const {value: confirm} = form.controls.confirmPassword;
    return password === confirm ? null : {error: 'error'};
  }
}
