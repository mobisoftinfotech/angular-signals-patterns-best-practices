import { Component, OnInit, signal, WritableSignal } from '@angular/core';

@Component({
    selector: 'app-dom-manipulation',
    templateUrl: './dom-manipulation.component.html',
    styleUrls: ['./dom-manipulation.component.scss'],
    standalone: true
})
export class DomManipulationComponent implements OnInit {
  getDetails: WritableSignal<boolean> = signal(false);
 
  ngOnInit() {
    this.onGetDetails();
  }

  onGetDetails() {
    // this.myService.getDetailsAPI().subscribe((data: boolean) => {
    //   this.getDetails.set(data ? true : false);
    // });
    this.getDetails.set(true); // data ? true : false
  }
}
