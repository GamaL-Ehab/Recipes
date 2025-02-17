import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  constructor(private _HttpClient:HttpClient) { }


  getAllCategories():Observable<any>{
    return this._HttpClient.get('https://www.themealdb.com/api/json/v1/1/categories.php')
  }

  getAllMeals():Observable<any>{
    return this._HttpClient.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
  }

  getMealsBycategory(category:string):Observable<any>{
    return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  }

  getMealById(id:string):Observable<any>{
    return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  }
}
