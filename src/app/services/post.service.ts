import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../types/post.type';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private httpClient: HttpClient) {}

  getPostById(id: string): Observable<Post | null> {
    return this.httpClient.get<Post>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  }

  getAllPost(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(
      `https://jsonplaceholder.typicode.com/posts/`
    );
  }
}
