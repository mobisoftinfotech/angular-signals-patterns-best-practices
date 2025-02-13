import { Component, Input, signal } from '@angular/core';

@Component({
    selector: 'app-child2',
    templateUrl: './child2.component.html',
    styleUrls: ['./child2.component.scss'],
    standalone: true
})
export class ChildTwoComponent {
  @Input() signal: ReturnType<typeof signal> | any;
}
