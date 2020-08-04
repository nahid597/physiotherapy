import { Component, OnInit } from '@angular/core';
import { Post } from '../posts/post.model';
import { PostService } from '../posts/post.service';

@Component({
  selector: 'app-feed-back-form',
  templateUrl: './feed-back-form.component.html',
  styleUrls: ['./feed-back-form.component.css']
})
export class FeedBackFormComponent implements OnInit {

  public posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getpost();
    this.postService.getPostsUpdateListener().subscribe((posts: Post[]) => {
      this.posts = posts;
    });

  }

}
