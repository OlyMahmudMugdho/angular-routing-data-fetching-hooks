import { Component } from '@angular/core';
import {ChildComponent} from "../child/child.component";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    ChildComponent
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  messageFromParent:string = "This is a message from parent";
  mesageFromChild: string | undefined;

  recieveMessage($event: string){
    this.mesageFromChild = $event;
  }
}
