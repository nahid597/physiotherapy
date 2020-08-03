import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {NgbModule,NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatExpansionModule, MatExpansionPanelDescription} from '@angular/material/expansion';
import {MatRadioModule, MatRadioButton} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ShowSearchExapleComponent } from './show-search-exaple/show-search-exaple.component';
import { FeedBackFormComponent } from './feed-back-form/feed-back-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthServicesService } from './auth/auth-services.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ShowSearchExapleComponent,
    FeedBackFormComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    NgbModule,
    MatExpansionModule,
    MatRadioModule,
    MatCheckboxModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'', component: HomeComponent},
      {path:'searchforexercise', component: SearchComponent},
      {path: 'showsearchexample', component: ShowSearchExapleComponent},
      {path: 'feedbackform', component: FeedBackFormComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'login', component: LoginComponent}
    ])
  ],
  providers: [
    AuthServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
