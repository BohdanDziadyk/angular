import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../models/user/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];

  constructor(private httpClient: HttpClient) { }
  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
  usersFilter(users: User[], user: User): User[]{
    return users.filter(value => value.id === user.id || value.name.toLowerCase().includes(user.name.toLowerCase()));
  }
}
