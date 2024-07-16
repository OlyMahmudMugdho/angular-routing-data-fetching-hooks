import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {TodosComponent} from "./todos/todos.component";
import {ParentComponent} from "./parent/parent.component";
import {ChildComponent} from "./child/child.component";
import {LoginComponent} from "./login/login.component";
import {ProtectedComponent} from "./protected/protected.component";
import {authenticationGuard} from "./guards/authentication/authentication.guard";

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
  },
  {
    path : 'parent',
    component : ParentComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'protected',
    component : ProtectedComponent,
    canActivate : [authenticationGuard]
  }
];
