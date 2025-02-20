import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Home2Component } from '../home2/home2.component';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-home1',
  standalone: true,
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component {
  constructor( private counterService: CounterService ) { }

  test2() {
    this.counterService.increment();
    
  }
}
