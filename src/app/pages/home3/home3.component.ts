import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home3',
  imports: [],
  templateUrl: './home3.component.html',
  styleUrl: './home3.component.css'
})
export class Home3Component {
  counter: number = 0;
    @Output() counterChange = new EventEmitter<number>(); // ✅ Émet un événement avec la nouvelle valeur du compteur


    incrementCounter() {
      this.counter++; // ✅ Incrémente la valeur
      this.counterChange.emit(this.counter); // ✅ Envoie la mise à jour à Home2
    }
}
