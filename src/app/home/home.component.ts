import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  seletedValue = "nahid";
  panelOpenState = false;
  selcetCondition:string;

  //condition set
  conditions = [
    "C1 C4 treatering",
    "C5 tetraplegina",
    "C6 tetraplegina",
    "C1 C4 treatering",
    "C5 tetraplegina",
    "C6 tetraplegina",
    "C1 C4 treatering",
    "C5 tetraplegina",
    "C6 tetraplegina",
    "C1 C4 treatering",
    "C5 tetraplegina",
    "C6 tetraplegina",

  ]
  constructor() {
   }

  filter(query: string)
  {
    console.log(query);
  }

  filterusingcondition(option: string){
    console.log(option);
  }

  ngOnInit() {
  }

}
