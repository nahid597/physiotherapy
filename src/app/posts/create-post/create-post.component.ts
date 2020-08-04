import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  public images;
  constructor(private postService: PostService) { }

  onSavePost(f)
  {
     console.log(f);
    // const formData = new FormData();
    // formData.append('file', this.images);
    // formData.append('title', f.title);
    // formData.append('details', f.details);
    this.postService.postFile(f.title, f.details, this.images );

  }
  selectImage(event)
  {
      if(event.target.files.length > 0)
      {
        const file = event.target.files[0];
        this.images = file;
      }

      //console.log(this.images);
  }

  ngOnInit() {
  }

}
