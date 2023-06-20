import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private showCardsSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  showCards$: Observable<boolean> = this.showCardsSubject.asObservable();

  updateShowCards(show: boolean) {
    this.showCardsSubject.next(show);
  }
}
