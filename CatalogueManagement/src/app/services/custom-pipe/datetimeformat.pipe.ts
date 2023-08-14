import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datetimeformat'
})
export class DatetimeformatPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
