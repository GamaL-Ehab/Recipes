import { MealsComponent } from './meals/meals.component';
import { Routes } from '@angular/router';
import { MealDetailsComponent } from './meal-details/meal-details.component';

export const routes: Routes = [
    {path:'', redirectTo:'home/All', pathMatch:'full'},
    {path:'home/All', component:MealsComponent},
    {path:'home/:category', component:MealsComponent},
    {path:'mealDetails/:id', component:MealDetailsComponent, title:'Meal Details'}
];
