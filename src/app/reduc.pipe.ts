import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduc',
})
export class ReducPipe implements PipeTransform {
  transform(value: number, pourcentage = 1): number {
    return value - (value * (pourcentage / 100));
  }
}
