import { MealsComponent } from './meals/meals.component';
import { Routes } from '@angular/router';
import { MealDetailsComponent } from './meal-details/meal-details.component';

export const routes: Routes = [
    {path:'', redirectTo:'home/All', pathMatch:'full'},
    {path:'home/All', component:MealsComponent, pathMatch:'full'},
    {path:'home/:category', component:MealsComponent, pathMatch:'full'},
    {path:'mealDetails/:id', component:MealDetailsComponent, pathMatch:'full', title:'Meal Details'}
];
