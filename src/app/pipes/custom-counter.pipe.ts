import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCounter', // ✅ Nom du pipe utilisé dans le template
  standalone: true // ✅ Compatible avec Angular Standalone
})
export class CustomCounterPipe implements PipeTransform {
  transform(value: number): string {
    return value % 2 === 0 ? `${value} (Pair)` : `${value} (Impair)`; // ✅ Bonne syntaxe avec backticks
  }
}
