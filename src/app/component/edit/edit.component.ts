import { Component, OnInit } from '@angular/core';
import {Home} from "../../model/home";
import {Category} from "../../model/category";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {HomeService} from "../../service/home.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  home!:Home;
  categories !: Category[];
  category!:Category;
  constructor(private activatedRoute: ActivatedRoute,
              private homeService:HomeService,
              private fb: FormBuilder,
              private router: Router) { }

  homeForm :FormGroup =this.fb.group({
    id:new FormControl(),
    name:new FormControl(),
  })

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paraMap: ParamMap) => {
      let id = paraMap.get('id')
      console.log(id)
      // @ts-ignore
      this.blogService.findById(id).subscribe(result => {
        this.home = result
        console.log(result)
      })
      this.homeService.getAll().subscribe(rs=>{
        this.categories=rs
      })

    })
    this.home={
      id:'',
      name:'',
      category:{},
    }
  }

  update(){
    const home=this.homeForm.value;
    if(home.categories==null){
      home.categories=this.home.category?.id
    }
    console.log(home.status)
    this.category={
      id : home.status,
    }
    home.categories=this.category
    this.homeService.editHome(this.home.id,home).subscribe(()=>{
      alert("Sửa thành công ")
      this.router.navigate(["/"])
    })
  }

}
