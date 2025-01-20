import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../types/post.type';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];
  items: any;
  post: any;

  constructor(private service: PostService) {}
  ngOnInit() {
    this.service.getAllPost().subscribe((posts) => {
      this.posts = posts;
    });
  }
}
