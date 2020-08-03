
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {authUserModel} from '../user-model'
import { AuthServicesService } from '../auth-services.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, public authService: AuthServicesService) { }

  submit(f)
  {
     const postData: authUserModel = {
        FirstName: f.FirstName,
        LastName: f.LastName,
        EmailName: f.EmailName,
        Passwort: f.Passwort,
        confirmPasswort: f.confirmPasswort
     }

     //console.log(postData);

     this.authService.userSignup(postData);
    
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
