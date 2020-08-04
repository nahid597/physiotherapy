import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient, private router: Router) { }

  getpost()
  {
     this.http.get<{post:Post[]}>('http://localhost:3000/api/posts')
     .subscribe((data) => {
       console.log(data);
       this.posts = data.post;
       this.postsUpdated.next([...this.posts]);
      // return this.posts;
     });
     
  }

  postFile(title: string, details: string, image: File)
  {
    console.log(image);
    const postData = new FormData();
    postData.append('title', title);
    postData.append('details', details);
    postData.append('image', image, title);
    
     this.http.post<{message: string, post: Post}>('http://localhost:3000/api/posts', postData).subscribe(data => {
       const posts = {
         title: data.post.title,
         details: data.post.details,
         imagePath: data.post.imagePath,
         _id: data.post._id
       };

       console.log(posts);

       this.posts.push(posts);
       this.postsUpdated.next([...this.posts]);
      // this.router.navigate(['/']);
     })
  }

  getPostsUpdateListener()
  {
     return this.postsUpdated.asObservable();
  }


}
