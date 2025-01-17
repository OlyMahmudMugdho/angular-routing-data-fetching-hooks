import { Component } from '@angular/core';
import {DataService} from "../service/data/data.service";
import {data} from "autoprefixer";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos: any[] = []
  constructor(private dataService: DataService) {
  }
  ngOnInit():void {
    this.dataService.getPosts().subscribe((data:any[]) => {
      this.todos = data
      console.log(this.todos[0])
    })
  }
}
