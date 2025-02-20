import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counterSubject = new BehaviorSubject<number>(0); // ✅ Stocke le compteur
  counter$ = this.counterSubject.asObservable(); // ✅ Observable que Home1 et Home2 peuvent écouter

  increment() {
    this.counterSubject.next(this.counterSubject.value + 1); // ✅ Incrémente le compteur
  }
}
