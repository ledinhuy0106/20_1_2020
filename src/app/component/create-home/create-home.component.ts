import {Component, OnInit} from '@angular/core';
import {HomeService} from "../../service/home.service";
import {Category} from "../../model/category";
import {Router} from "@angular/router";
import {Home} from "../../model/home";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-home',
  templateUrl: './create-home.component.html',
  styleUrls: ['./create-home.component.css']
})
export class CreateHomeComponent implements OnInit {
  home!:Home;
  category1 !: Category
  category: Category[]=[]
  homeForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
  });


  constructor(private _homeService: HomeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this._homeService.getAll().subscribe(rs => {
      this.category = rs
      console.log(rs)
    })
  }
  create() {
    const home = this.homeForm.value;
    console.log(home.category)
    // @ts-ignore
    this.category1={
      id : home.category,
    }
    home.category=this.category1
    console.log(home)
    this._homeService.create(home).subscribe(() => {
      alert("thêm thành công")
      this.router.navigate(["blogs"])
    })
  }
}
