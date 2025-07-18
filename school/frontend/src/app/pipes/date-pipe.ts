import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cdate'
})
export class DatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
