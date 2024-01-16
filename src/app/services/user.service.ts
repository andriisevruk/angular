import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, delay, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isAuthenticated: boolean = true
  userName: string = ''
  
  constructor() { }

  login(user: User) : Observable<any> {
    if(user.email == "test@gmail.com" && user.password == "1234") {
      const emailParts = user.email.split('@');
      this.userName = emailParts[0];
      this.isAuthenticated = true
      return of({}).pipe(delay(2000))
    }

    return throwError(() => "login error")
  }

  register() {}

  logout() {}

}
