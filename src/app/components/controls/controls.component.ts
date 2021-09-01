import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryserService }from './categoryser.service';
import {CategoryList} from './CategoryList';
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  selectedFood: string;
  selectedFoodModel: string;
  public categories: CategoryList[] = [];
  constructor(private http: CategoryserService){}
  ngOnInit(){
    debugger
    this.http.getCategories().subscribe((data) =>{
      this.categories = data;
    console.log(data);
      
    });
    
  }
  
}
