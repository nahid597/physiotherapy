import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  seletedValue = "nahid";
  panelOpenState = false;
  selcetCondition:string;


  diffcultiesSelectedItemsList = [];
  diffficultiesCheckedvalue = [];

  equipmentSelectedItemsList = [];
  equipmentCheckedvalue = [];

  exerciseSelectedItemsList = [];
  exerciseCheckedvalue = [];

  bodySelectedItemsList = [];
  bodyCheckedvalue = [];

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

  ];

  difficulties = [
    "High",
    "Low",
    "Midium"
  ];

  ageCategories = [
    "Infant/young child",
    "Child",
    "Adult",
    "Senior"
  ]


  imageOrienCategories = [
    "Not specified",
    "Left affected",
    "Right affected",
  ]


  difficultiesCheckboxDataList = [
    {
      id: 'C001',
      label: 'High',
      isChecked: false
    },
    {
      id: 'C002',
      label: 'Midium',
      isChecked: false
    },
    {
      id: 'C003',
      label: 'Low',
      isChecked: false
    },
  ];

  equipmentCheckboxDataList = [
    {
      id: 'C001',
      label: 'Free weights',
      isChecked: false
    },
    {
      id: 'C002',
      label: 'Weights maching',
      isChecked: false
    },
    {
      id: 'C003',
      label: 'Wall mounted pulleys',
      isChecked: false
    },
    {
      id: 'C003',
      label: 'Theraband',
      isChecked: false
    },
    {
      id: 'C003',
      label: 'Step/block',
      isChecked: false
    },
    {
      id: 'C003',
      label: 'Standing equipment',
      isChecked: false
    },
    {
      id: 'C003',
      label: 'splints',
      isChecked: false
    },
    {
      id: 'C003',
      label: 'Plinth',
      isChecked: false
    },
    {
      id: 'C003',
      label: 'Standing equipment',
      isChecked: false
    },
    {
      id: 'C003',
      label: 'cycle ergometer',
      isChecked: false
    },
    {
      id: 'C003',
      label: 'Stool/chair',
      isChecked: false
    },
  ];

  exerciseCheckboxDataList = [
    {
      id: 'C001',
      label: 'Strectching/ROM',
      isChecked: false
    },
    {
      id: 'C002',
      label: 'Fitness training',
      isChecked: false
    },
    {
      id: 'C003',
      label: 'strength training',
      isChecked: false
    },
    {
      id: 'C003',
      label: 'Control extercise',
      isChecked: false
    },
    {
      id: 'C003',
      label: 'Amplitue exercise',
      isChecked: false
    },
    {
      id: 'C003',
      label: 'Clearing secrections',
      isChecked: false
    },
    {
      id: 'C003',
      label: 'splints',
      isChecked: false
    },
    {
      id: 'C003',
      label: 'Plinth',
      isChecked: false
    },
    {
      id: 'C003',
      label: 'Standing equipment',
      isChecked: false
    },
    {
      id: 'C003',
      label: 'cycle ergometer',
      isChecked: false
    },
    {
      id: 'C003',
      label: 'Tranferring',
      isChecked: false
    },
  ];

  bodyCheckboxDataList = [
    {
      id: 'C001',
      label: 'Head/neck',
      isChecked: false
    },
    {
      id: 'C002',
      label: 'shoulder/upper arm',
      isChecked: false
    },
    {
      id: 'C003',
      label: 'Elbow/forearm',
      isChecked: false
    },
    {
      id: 'C003',
      label: 'Amplitue exercise',
      isChecked: false
    },
    {
      id: 'C003',
      label: 'Clearing secrections',
      isChecked: false
    },
    {
      id: 'C003',
      label: 'splints',
      isChecked: false
    },
    {
      id: 'C003',
      label: 'Plinth',
      isChecked: false
    },
    {
      id: 'C003',
      label: 'Hip/thigh',
      isChecked: false
    },
  ];

  constructor() {
    
   }

  filter(query: string)
  {
    console.log(query);
  }

  filterusingcondition(option: string){
    console.log(option);
  }

  filterUsingAge(option: string)
  {
    console.log(option);
  }
  filterUsingImageOrien(option: string)
  {
    console.log(option);
  }

  fetchSelectedItems(checboxDataList, selecItemList) {
    selecItemList = checboxDataList.filter((value, index) => {
      return value.isChecked
    });
    return selecItemList;
  }

  fetchCheckedIDs(checkboxDataList) {
    this.diffficultiesCheckedvalue = []
    checkboxDataList.forEach((value, index) => {
      if (value.isChecked) {
        this.diffficultiesCheckedvalue.push(value.label);
        //console.log(value.label);
      }
    });
    this.showCheckData();
  }

  showCheckData()
  {
      for(var check of this.diffficultiesCheckedvalue )
      {
        console.log(check);
      }
  }

  filterUsingDifficulty() {
    this.diffcultiesSelectedItemsList =  this.fetchSelectedItems(this.difficultiesCheckboxDataList,this.diffcultiesSelectedItemsList);
    this.fetchCheckedIDs(this.difficultiesCheckboxDataList);
  }

  filterUsingEquipment()
  {
    this.equipmentSelectedItemsList =  this.fetchSelectedItems(this.equipmentCheckboxDataList,this.equipmentSelectedItemsList);
    this.fetchCheckedIDs(this.equipmentCheckboxDataList);
  }

  filterUsingExercise()
  {
    this.exerciseSelectedItemsList =  this.fetchSelectedItems(this.exerciseCheckboxDataList,this.exerciseSelectedItemsList);
    this.fetchCheckedIDs(this.exerciseCheckboxDataList);
  }

  filterUsingBody()
  {
    this.bodySelectedItemsList =  this.fetchSelectedItems(this.bodyCheckboxDataList,this.bodySelectedItemsList);
    this.fetchCheckedIDs(this.bodyCheckboxDataList);
  }

  ngOnInit() {
    this.fetchSelectedItems(this.difficultiesCheckboxDataList,this.diffcultiesSelectedItemsList);
    this.fetchCheckedIDs(this.difficultiesCheckboxDataList)
  }


}
