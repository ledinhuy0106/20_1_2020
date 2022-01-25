import {Component, OnInit} from '@angular/core';
import {Post} from "../../model/post";
import {Category} from "../../model/category";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {PostService} from "../../service/post.service";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  post!:Post;
  category1!: Category
  category: Category[] = []
  form: FormGroup = new FormGroup({
    title: new FormControl(),
    content: new FormControl(),
    category: new FormControl(),
  });

  constructor(private _postService: PostService,
              private router: Router) {
  }

  ngOnInit(): void {
    this._postService.getAll().subscribe(rs => {
      this.category = rs
    })
  }

  create() {
    let post = this.form.value;
    this.category1 = {
      id: post.category
    }
    post.category = this.category1,
      console.log(post)
    this._postService.create(post).subscribe(() => {
      alert("thêm thành công")
      this.router.navigate([""])
    })
  }
}
