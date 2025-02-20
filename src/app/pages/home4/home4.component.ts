import { Component, Input } from '@angular/core';
import { CustomCounterPipe } from '../../pipes/custom-counter.pipe';

@Component({
  selector: 'app-home4',
  imports: [CustomCounterPipe],
  templateUrl: './home4.component.html',
  styleUrl: './home4.component.css'
})
export class Home4Component {
  @Input() counter: number = 0; // ✅ Reçoit la valeur de `Home1`

}
