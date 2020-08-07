
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {authUserModel} from '../user-model'
import { AuthServicesService } from '../auth-services.service';
import {PostUserData} from './postuserdata.model'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, public authService: AuthServicesService) { }

  public postUser: PostUserData;

  public postData: any = {
    FirstName: {
      required: {
        message: "Name required"
      }
    },
    LastName: {
      required: {
        message: "Name required"
      }
    },
    EmailName: {
      email: {
        message: "Not a valid email!"
      },
      required: {
        message: "Email required"
      }
    },
    Passwort: {
      size: {
        min: 8,
        message: "Password at least 8 character"
      },
      required: {
        message: "Password required"
      }
    },
    confirmPasswort: {
      size: {
        min: 8,
        message: "Password at least 8 character"
      },
      required: {
        message: "Password required"
      }
    },
    message: "tooltip"
  };


  onSubmitForm(form: any) {

    let _validationResult = form.validate();
    console.log(_validationResult);

    if(_validationResult.isValid)
    {
        const postData: authUserModel = {
          FirstName: this.postUser.FirstName,
          LastName: this.postUser.LastName,
          EmailName: this.postUser.EmailName,
          Passwort: this.postUser.PasswortName,
          confirmPasswort: this.postUser.ConfirmPasswortName
        }

        this.authService.userSignup(postData);

        this.router.navigate(['/']);
    }
  }

  
  ngOnInit() {
      this.postUser = new PostUserData();
  }
 

}
