import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Home} from "../model/home";
import {Category} from "../model/category";
const api_url='http://localhost:8080/api/homes'
const api_url2='http://localhost:8080/api/homes/getcategories'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _httpClient:HttpClient) { }
  showAll():Observable<Home[]>{
    return this._httpClient.get<Home[]>(api_url)
  }
  // @ts-ignore
  delete(id):Observable<Home>{
    return this._httpClient.delete<Home>(api_url+'/'+id)
  }
  create(home:Home) : Observable<Home>{
    // @ts-ignore
    return this._httpClient.post<Home>(api_url,home)
  }
  // @ts-ignore
  findById(id) : Observable<?Home>{
    return this._httpClient.get<Home>(api_url+'/'+id)
  }
  //@ts-ignore
  editHome(id,home:Home) :Observable<Home>{
    // @ts-ignore
    return this._httpClient.put<Home>(api_url+'/'+id,home)
  }
  getAll() :Observable<Category[]>{
    return this._httpClient.get<Category[]>(api_url2)
  }
}
