import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../model/post";
import {Observable} from "rxjs";
import {Category} from "../model/category";
var API="http://localhost:8080/api/posts/"

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _httpClient:HttpClient) { }
  showAll():Observable<Post[]>{
    return this._httpClient.get<Post[]>(API)
  }getAll():Observable<Category[]>{
    return this._httpClient.get<Category[]>("http://localhost:8080/api/posts/categories")
  }
}
