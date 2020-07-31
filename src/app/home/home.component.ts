import { Component, OnInit } from '@angular/core';
import { flatten } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private router: Router){

  }

  searchForExercise()
  {
      this.router.navigate(["/searchforexercise"]);
  }

  showExamples()
  {
    this.router.navigate(["/showsearchexample"]);
  }

  ngOnInit() {

  }

}
