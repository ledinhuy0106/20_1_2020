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
  categories!: Category[];
  category!:Category;
  constructor(private activatedRoute: ActivatedRoute,
              private homeService:HomeService,
              private fb: FormBuilder,
              private router: Router) { }

  homeForm :FormGroup =this.fb.group({
    name:new FormControl(),
    category:new FormControl()
  })

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paraMap: ParamMap) => {
      let id = paraMap.get('id')
      console.log(id)
      // @ts-ignore
      this.homeService.findById(id).subscribe(result => {
        // @ts-ignore
        this.home = result
        console.log(result)
      })
      this.homeService.getAll().subscribe(rs=>{
        this.categories=rs
        console.log(rs)
      })

    })
    this.home={
      id:'',
      name:'',
      category:{},
    }
  }

  update(){
    // const home=this.homeForm.value;
    // if(home.category==null){
    //   home.category=this.home.category?.id
    // }
    // console.log(home.category)
    // this.category={
    //   id : home.category
    //
    // }
    // home.category=this.category
    const home = {
      name: this.homeForm.value.name,
      category: {
        id: this.homeForm.value.category
      }
    }
    this.homeService.editHome(this.home.id,home).subscribe(()=>{
      alert("Sửa thành công ")
      this.router.navigate(["/"])
    })
  }
}
