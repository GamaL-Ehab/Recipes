import { Ingredients } from './../interfaces/ingredients';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealsService } from '../services/meals.service';

@Component({
  selector: 'app-meal-details',
  imports: [],
  templateUrl: './meal-details.component.html',
  styleUrl: './meal-details.component.scss'
})
export class MealDetailsComponent implements OnInit{

  mealDetails:any;
  ingredients:Ingredients[] = [];

  constructor(private _MealsService:MealsService, private _ActivatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe({
      next: res => {this.getMealById(res['id']); console.log(res['id']); 
      }
      
    })
  }

  getMealById(id:string){
    this._MealsService.getMealById(id).subscribe({
      next:res => {this.mealDetails = res.meals[0]; console.log(this.mealDetails); this.getIngredients()
      }
      
    })
  }

  getIngredients(){
    for(let i=1; i<=20; i++){
      if(this.mealDetails[`strIngredient${i}`] && this.mealDetails[`strMeasure${i}`]){
        this.ingredients.push({Ingredient: this.mealDetails[`strIngredient${i}`],Measure: this.mealDetails[`strMeasure${i}`]})
      }
      
      
    }
  }
}
