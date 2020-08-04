import { Component, OnInit } from '@angular/core';
import { Post } from '../posts/post.model';
import { PostService } from '../posts/post.service';

@Component({
  selector: 'app-show-search-exaple',
  templateUrl: './show-search-exaple.component.html',
  styleUrls: ['./show-search-exaple.component.css']
})
export class ShowSearchExapleComponent implements OnInit {

  public posts: Post[] = [];
  public filterPost: Post[] = [];
  public copyPost: Post[] = [];

  constructor(private postService: PostService) { }

  searchexercises=[
    "Spinal cord Injuery",
    "Whiplash"
  ];


  exerciseFilter(filterData: string)
  {
     console.log(filterData);

     if(filterData == "Spinal cord Injuery")
     {
       this.filterPost = this.posts;
       this.copyPost = this.filterPost;
     }
     else{
        this.filterPost = (filterData) ?
        this.posts.filter((data) => data.title.toLowerCase().includes(filterData.toLowerCase())):
        this.posts;
        this.copyPost = this.filterPost;
     }
  }

  ngOnInit() {
    this.postService.getpost();
    this.postService.getPostsUpdateListener().subscribe((posts: Post[]) => {
      this.filterPost = this.posts = posts;
      this.copyPost = this.filterPost;
    });

  }
}
