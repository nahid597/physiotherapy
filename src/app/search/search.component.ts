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
  public copyExerciseDifPost: Post[] = [];
  public storePost: Post[] = [];
  public storeEquipmentPost: Post[] = [];
  public storeExercisePost: Post[] = [];
  public storeBodyPartPost: Post[] = [];
  public storeAgePost: Post[] = [];
  public storeImagePost: Post[] = [];


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
      label: 'Weights machine',
      isChecked: false
    },
    {
      id: 'C003',
      label: 'Wall mounted pulleys',
      isChecked: false
    },
    {
      id: 'C004',
      label: 'Theraband',
      isChecked: false
    },
    {
      id: 'C005',
      label: 'Step/block',
      isChecked: false
    },
    {
      id: 'C006',
      label: 'Standing equipment',
      isChecked: false
    },
    {
      id: 'C007',
      label: 'Splints',
      isChecked: false
    },
    {
      id: 'C008',
      label: 'Plinth',
      isChecked: false
    },
    {
      id: 'C009',
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
      id: 'C004',
      label: 'Control extercise',
      isChecked: false
    },
    {
      id: 'C005',
      label: 'Amplitue exercise',
      isChecked: false
    },
    {
      id: 'C006',
      label: 'Clearing secrections',
      isChecked: false
    },
    {
      id: 'C007',
      label: 'Transferring',
      isChecked: false
    },
    {
      id: 'C008',
      label: 'Mobilising in wheelchair',
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
      id: 'C004',
      label: 'Wrist/hand',
      isChecked: false
    },
    {
      id: 'C005',
      label: 'Hip/thigh',
      isChecked: false
    },
    {
      id: 'C006',
      label: 'Knee/thigh',
      isChecked: false
    },
    {
      id: 'C007',
      label: 'Whole body',
      isChecked: false
    }
  ];

  constructor(private postService: PostService) {
    
   }

  filter(query: string)
  {
    console.log(query);
    this.filterPost = (query) ?
    this.copyPost.filter((data) => data.title.toLowerCase().includes(query.toLowerCase())):
    this.copyPost;
  }

  filterusingcondition(option: string){
    console.log(option);

    this.filterPost= (option) ?
    this.copyConditionPost.filter((data) => data.title.toLowerCase().includes(option.toLowerCase())):
    this.copyConditionPost;
    this.copySelelctConditionPost = this.filterPost;
    this.copyPost = this.filterPost;

    // for(var post of this.filterPost)
    // {
    //   this.storePost.push(post);
    // }

  }

  filterUsingAge(option: string)
  {
    console.log(option);

    this.filterPost= (option) ?
    this.storeAgePost.filter((data) => data.title.toLowerCase().includes(option.toLowerCase())):
    this.storeAgePost;
    // this.storeAgePost = this.filterPost;
    this.copyPost = this.filterPost;
  }
  filterUsingImageOrien(option: string)
  {
    console.log(option);

    this.filterPost= (option) ?
    this.storeImagePost.filter((data) => data.title.toLowerCase().includes(option.toLowerCase())):
    this.storeImagePost;
    // this.storeAgePost = this.filterPost;
    this.copyPost = this.filterPost;
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
  }

  filterUsingDifficulty() {
    this.diffcultiesSelectedItemsList =  this.fetchSelectedItems(this.difficultiesCheckboxDataList,this.diffcultiesSelectedItemsList);
    this.fetchCheckedIDs(this.difficultiesCheckboxDataList);
  
    this.filterPost = [];
    this.storePost = [];

    console.log(this.diffcultiesSelectedItemsList.length);

    for(var check of this.diffficultiesCheckedvalue )
    {
        console.log("nahid:" + check);
        this.storePost = (check) ?
        this.copyExerciseDifPost.filter((data) => data.title.toLowerCase().includes(check.toLowerCase())):
        this.copyExerciseDifPost;
        
        for(var post of this.storePost)
        {
          //console.log(post);
          this.filterPost.push(post);
        }
        //this.copyPost.push();
    }

    if(this.diffcultiesSelectedItemsList.length == 0)
    {
      this.copyPost = this.copyExerciseDifPost;
      this.filterPost = this.copyPost;
    }
    else
    {
      this.copyPost = this.filterPost;
    }
    

  }

  filterUsingEquipment()
  {
    this.equipmentSelectedItemsList =  this.fetchSelectedItems(this.equipmentCheckboxDataList,this.equipmentSelectedItemsList);
    this.fetchCheckedIDs(this.equipmentCheckboxDataList);

    this.filterPost = [];
    this.storePost = [];

    for(var check of this.diffficultiesCheckedvalue )
    {
       // console.log("nahid:" + check);
        this.storePost = (check) ?
        this.storeEquipmentPost.filter((data) => data.title.toLowerCase().includes(check.toLowerCase())):
        this.storeEquipmentPost;
        
        for(var post of this.storePost)
        {
          //console.log(post);
          this.filterPost.push(post);
        }
        //this.copyPost.push();
    }
    // this.copyPost = this.filterPost;

    // console.log(this.diffficultiesCheckedvalue .length);

    if(this.diffficultiesCheckedvalue .length == 0)
    {
      this.copyPost = this.storeEquipmentPost;
      this.filterPost = this.copyPost;
    }
    else
    {
      this.copyPost = this.filterPost;
    }

  }

  filterUsingExercise()
  {
    this.exerciseSelectedItemsList =  this.fetchSelectedItems(this.exerciseCheckboxDataList,this.exerciseSelectedItemsList);
    this.fetchCheckedIDs(this.exerciseCheckboxDataList);

    this.filterPost = [];
    this.storePost = [];

    for(var check of this.diffficultiesCheckedvalue )
    {
       // console.log("nahid:" + check);
        this.storePost = (check) ?
        this.storeExercisePost.filter((data) => data.title.toLowerCase().includes(check.toLowerCase())):
        this.storeExercisePost;
        
        for(var post of this.storePost)
        {
          //console.log(post);
          this.filterPost.push(post);
        }
        //this.copyPost.push();
    }

    if(this.diffficultiesCheckedvalue.length == 0)
    {
      this.copyPost = this.storeExercisePost;
      this.filterPost = this.copyPost;
    }
    else
    {
      this.copyPost = this.filterPost;
    }
  }

  filterUsingBody()
  {
    this.bodySelectedItemsList =  this.fetchSelectedItems(this.bodyCheckboxDataList,this.bodySelectedItemsList);
    this.fetchCheckedIDs(this.bodyCheckboxDataList);

    this.filterPost = [];
    this.storePost = [];

    for(var check of this.diffficultiesCheckedvalue )
    {
       // console.log("nahid:" + check);
        this.storePost = (check) ?
        this.storeBodyPartPost.filter((data) => data.title.toLowerCase().includes(check.toLowerCase())):
        this.storeBodyPartPost;
        
        for(var post of this.storePost)
        {
          //console.log(post);
          this.filterPost.push(post);
        }
        //this.copyPost.push();
    }

    if(this.bodySelectedItemsList.length == 0)
    {
      this.copyPost = this.storeExercisePost;
      this.filterPost = this.copyPost;
    }
    else
    {
      this.copyPost = this.filterPost;
    }
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
      this.copyExerciseDifPost = this.filterPost;
      this.storeEquipmentPost = this.filterPost;
      this.storeExercisePost = this.filterPost;
      this.storeBodyPartPost = this.filterPost;
      this.storeAgePost = this.filterPost;
      this.storeImagePost = this.filterPost;
    });
  }


}
