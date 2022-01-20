import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../service/home.service";
import {Home} from "../../model/home";

@Component({
  selector: 'app-list-home',
  templateUrl: './list-home.component.html',
  styleUrls: ['./list-home.component.css']
})
export class ListHomeComponent implements OnInit {
  homes: Home[] = []

  constructor(private _homeService: HomeService) {
  }

  ngOnInit(): void {
    this._homeService.showAll().subscribe(rs => {
      this.homes = rs
      console.log(rs)
    })
  }
// @ts-ignore
  delete(id) {
    if (confirm("Bạn có chắc chắc muốn xóa không ?")) {
      this._homeService.delete(id).subscribe(() => {
        alert('Xóa thành công')
        this.ngOnInit()
      })
    }
  }
}
