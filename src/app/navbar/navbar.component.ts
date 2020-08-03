import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthServicesService } from '../auth/auth-services.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  public userIsAuthenticate = false;
  private userStatusSubs: Subscription;

  constructor(private authservice: AuthServicesService) { }

  logout()
  {
      this.authservice.logout();
      this.userIsAuthenticate = false;
  }

  ngOnInit() {
    this.userStatusSubs = this.authservice.getAuthStatusListenar()
    .subscribe(isAuthenticated => {
      this.userIsAuthenticate = isAuthenticated;
    });
  }

  ngOnDestroy(){
    this.userStatusSubs.unsubscribe();
  }

}
