import { Component, Input, signal } from '@angular/core';

@Component({
    selector: 'app-child1',
    templateUrl: './child1.component.html',
    styleUrls: ['./child1.component.scss'],
    standalone: true
})
export class ChildOneComponent {
  @Input() signal: ReturnType<typeof signal> | any;  // Receive the signal from parent

  increaseSignal() {
    this.signal.set(this.signal() + 1);  // Increase signal value by 1
  }
}
