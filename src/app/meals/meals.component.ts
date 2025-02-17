import { Component, OnInit } from '@angular/core';
import { MealsService } from '../services/meals.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BlobOptions } from 'node:buffer';

@Component({
  selector: 'app-meals',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.scss'
})
export class MealsComponent implements OnInit{

  allCategories:any;
  mealsList!:any;

  constructor(private _MealsService:MealsService){}

  ngOnInit(): void {
    this.getAllCategories();
    this.getAllMeals();
  }

  getAllCategories(){
    this._MealsService.getAllCategories().subscribe({
      next: res => {this.allCategories = res.categories}
    })
  }

  getAllMeals(){
    this._MealsService.getAllMeals().subscribe({
      next: res => this.mealsList = res.meals
      
    })
  }

  getMealsByCategory(category:string){
    this._MealsService.getMealsBycategory(category).subscribe({
      next : res => {this.mealsList = res.meals;
        console.log(this.mealsList);
        
      }
    })
  }
}
