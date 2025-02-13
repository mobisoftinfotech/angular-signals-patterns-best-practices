import { Component, computed, Input, Signal, signal, WritableSignal } from '@angular/core';

@Component({
    selector: 'app-signal-basics',
    templateUrl: './signal-basics.component.html',
    styleUrls: ['./signal-basics.component.scss'],
    standalone: true
})
export class SignalBasicsComponent {
  currentAddition = signal(50);

  firstInput = signal(5);
  secondInput = signal(50);
  getAddition = computed(() => this.firstInput() + this.secondInput());

  constructor() {
    const writableSignalEx: WritableSignal<number> = signal(100);
    const getCalculatedValue: Signal<number> = computed(() => writableSignalEx() * 10);
    console.log('Writable Signals: ' + getCalculatedValue());
  }
 
  ngOnInit() {
    console.log('Reading Signals: ' + this.currentAddition());
    this.currentAddition.set(100);
    console.log('Signals after set : ' + this.currentAddition());
    this.currentAddition.update(value => value + 900);
    console.log('Signals after update : ' + this.currentAddition());
  }

  updateAddition() {
    this.firstInput.set(Math.floor(Math.random() * 100) + 1);
    this.secondInput.set(Math.floor(Math.random() * 100) + 1);
  }
}
