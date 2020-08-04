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

  constructor(private postService: PostService) { }

  searchexercises=[
    "Spinal cord Injuery",
    "Whiplash"
  ];


  exerciseFilter(f)
  {
    console.log(f);
  }

  ngOnInit() {
    this.postService.getpost();
    this.postService.getPostsUpdateListener().subscribe((posts: Post[]) => {
      this.posts = posts;
    });

  }
}
