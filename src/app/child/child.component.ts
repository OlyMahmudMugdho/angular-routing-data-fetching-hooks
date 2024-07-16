import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() message: any;

  @Output() messageEvent = new EventEmitter();

  sendMessage() {
    this.messageEvent.emit("child message");
  }

}
