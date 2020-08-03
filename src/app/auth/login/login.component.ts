import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {authUserModel} from '../user-model'
import { AuthServicesService } from '../auth-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public authService: AuthServicesService) { }

  Login(f)
  {
    const loginData = {
      EmailName: f.EmailName,
      Passwort: f.Passwort
   }

   this.authService.userLogin(f.EmailName, f.Passwort);
   const check = this.authService.getAuthStatusListenar();

   if(check)
   {
      console.log("nahidf sdf");
     this.router.navigate(['/']);
   }
    else{
      this.router.navigate(['/login']);
    }
  }

  test(f)
  {
    console.log(f);
  }

  ngOnInit() {
  }

}
