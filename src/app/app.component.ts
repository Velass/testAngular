import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home1Component } from "./pages/home1/home1.component";
import { Home2Component } from "./pages/home2/home2.component";
import { Home3Component } from './pages/home3/home3.component';
import { Home4Component } from './pages/home4/home4.component';

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Active le mode standalone
  imports: [RouterOutlet, Home1Component, Home2Component, Home3Component, Home4Component], // ✅ Importe les composants standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testAngular';
  counter: number = 0;
}
