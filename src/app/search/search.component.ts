import { Component, OnInit } from '@angular/core';
import { Post } from '../posts/post.model';
import { PostService } from '../posts/post.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  public posts: Post[] = [];
  public filterPost: Post[] = [];
  public copyPost: Post[] = [];
  public copyConditionPost: Post[] = [];
  public copySelelctConditionPost: Post[] = [];


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
    "C1-C4 Tetraplegia",
    "C5 Tetraplegia",
    "C6 Tetraplegia",
    "C7-C8 Tetraplegia",
    "Traumatic brain injury",
    "Stroke",
    "Motor delay",
    "Hand injury",
    "Whiplash",
    "Burn injuries",
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

  constructor(private postService: PostService) {
    
   }

  filter(query: string)
  {
    console.log(query);
    this.filterPost = (query) ?
    this.copySelelctConditionPost.filter((data) => data.title.toLowerCase().includes(query.toLowerCase())):
    this.copySelelctConditionPost;
  }

  filterusingcondition(option: string){
    console.log(option);

    this.filterPost= (option) ?
    this.copyConditionPost.filter((data) => data.title.toLowerCase().includes(option.toLowerCase())):
    this.copyConditionPost;
    this.copySelelctConditionPost = this.filterPost;

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
    //for filter and display data
    this.postService.getpost();
    this.postService.getPostsUpdateListener().subscribe((posts: Post[]) => {
      this.filterPost = this.posts = posts;
      this.copyPost = this.filterPost;
      this.copyConditionPost = this.filterPost;
      this.copySelelctConditionPost = this.filterPost;
    });
  }


}
