import { Routes } from '@angular/router';
import { ParentComponent } from './modules/ex-3/parent/parent.component';
import { DomManipulationComponent } from './modules/ex-1/dom-manipulation/dom-manipulation.component';
import { SignalBasicsComponent } from './modules/signal-basics/signal-basics/signal-basics.component';
import { SignalsExercisesComponent } from './modules/ex-2/signals-exercises/signals-exercises.component';

export const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'signals-basic', component: SignalBasicsComponent },
  { path: 'ex-1', component: DomManipulationComponent },
  { path: 'ex-2', component: SignalsExercisesComponent },
  { path: 'ex-3', component: ParentComponent },
];
