import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-search-exaple',
  templateUrl: './show-search-exaple.component.html',
  styleUrls: ['./show-search-exaple.component.css']
})
export class ShowSearchExapleComponent implements OnInit {

  searchexercises=[
    "Spinal cord Injuery",
    "Whiplash"
  ];

  constructor() { }

  exerciseFilter(f)
  {
    console.log(f);
  }

  ngOnInit() {
  }

}
