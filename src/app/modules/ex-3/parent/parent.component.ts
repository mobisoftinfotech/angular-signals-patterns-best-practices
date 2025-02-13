import { Component, signal } from '@angular/core';
import { ChildOneComponent } from '../components/child-one/child1.component';
import { ChildTwoComponent } from '../components/child-two/child2.component';

@Component({
    selector: 'app-parent',
    imports: [ChildOneComponent, ChildTwoComponent],
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.scss'],
    standalone: true
})
export class ParentComponent {
  signal = signal(0);
}
