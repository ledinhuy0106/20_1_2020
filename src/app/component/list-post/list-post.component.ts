import { Component, OnInit } from '@angular/core';
import {PostService} from "../../service/post.service";
import {Post} from "../../model/post";

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  posts:Post[]=[]

  constructor(private _postService:PostService) { }

  ngOnInit(): void {
    this._postService.showAll().subscribe(rs => {
      this.posts = rs
      console.log(rs)
    })
  }

}
