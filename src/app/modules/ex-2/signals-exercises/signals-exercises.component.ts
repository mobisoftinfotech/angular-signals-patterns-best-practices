import { Component, computed, effect, signal, WritableSignal } from "@angular/core";

@Component({
  selector: 'app-signals-exercises',
  templateUrl: './signals-exercises.component.html',
  styleUrls: ['./signals-exercises.component.scss'],
  standalone: true
})
export class SignalsExercisesComponent {
  books: WritableSignal<any> = signal([
    { price: 1000, title: 'School Books', isAvailable: true },
    { price: 2000, title: 'Story Books', isAvailable: false },
    { price: 3000, title: 'Top Novels', isAvailable: false }
  ]);

  // Computed signal based on the isAvailable flag to rank and filter prices
  getAvailableBooksSortedByPrice = computed(() => {
    const filteredResult = this.books().filter((book: { isAvailable: any; }) => book.isAvailable);
    return filteredResult.sort((a: { price: number; }, b: { price: number; }) => a.price - b.price);
  });

  constructor() {
    // Effect to record the filtered books and the number of books left
    effect(() => {
      console.log(`Available Books: ` + this.getAvailableBooksSortedByPrice().length);
    });
    this.updateBookElements();
  }

  updateBookElements() {
    // Change the writable signals values.
    const updatingElement = this.books();
    updatingElement[2].isAvailable = true;
    this.books.set(updatingElement);
  }
}

