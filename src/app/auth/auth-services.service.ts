import { Injectable } from '@angular/core';
import {authUserModel} from './user-model'
import { HttpClient } from '@angular/common/http';
import { Subject, TimeoutError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  private token: String;
  private authStatusListenar = new Subject<boolean>();
  public userIsAuthenticate = false;

  constructor(private http: HttpClient, private router: Router) { }

  getToken()
  {
    return this.token;
  }

  getAuthStatusListenar()
  {
    return this.authStatusListenar.asObservable();
  }

  userSignup(post: authUserModel )
  {
      const postData = {
        FirstName: post.FirstName,
        LastName: post.LastName,
        EmailName: post.EmailName,
        Passwort: post.Passwort,
        confirmPasswort: post.confirmPasswort
      };

      console.log(postData);

      this.http.post('http://localhost:3000/api/user/signup', postData)
      .subscribe((response) => {
        alert("successfully signup");
        console.log(response);
      });

      //console.log(this.token);
  }

  userLogin(EmailName: String, Passwort: String)
  {
    const loginData: {EmailName: String, Passwort: String} = {
      EmailName: EmailName,
      Passwort: Passwort
    };

    this.http.post<{token: String}>('http://localhost:3000/api/user/login', loginData)
    .subscribe((response) => {
      const token = response.token;
      console.log(response);

        if(token)
        {
          alert("successfully login");
          this.userIsAuthenticate = true;
          this.token = token;
          this.authStatusListenar.next(true);
        }
    });

  }

  logout()
  {
     this.token = null;
     this.authStatusListenar.next(false);
  }


}
