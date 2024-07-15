import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {TodosComponent} from "./todos/todos.component";

export const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
  },
  {
    path : 'about',
    component : AboutComponent,
  },
  {
    path : 'todos',
    component : TodosComponent
  }
];
