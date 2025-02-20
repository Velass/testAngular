import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from '../../services/counter.service';
import { CustomCounterPipe } from '../../pipes/custom-counter.pipe';

@Component({
  selector: 'app-home2',
  standalone: true,
  imports: [CommonModule, CustomCounterPipe], // ✅ Import du Pipe et CommonModule
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {
  counter$!: any; // ✅ Déclare `counter$` mais ne l'initialise pas encore

  constructor(private counterService: CounterService) {} // ✅ Initialisation correcte

  ngOnInit() {
    this.counter$ = this.counterService.counter$; // ✅ `counterService` est bien initialisé ici !
  }
}
