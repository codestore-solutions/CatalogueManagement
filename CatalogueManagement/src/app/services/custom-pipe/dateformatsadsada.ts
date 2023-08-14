import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Constants } from '../constants';

@Pipe({
  name: 'dateformat'
})
export class DateFormat extends DatePipe implements PipeTransform {
    override transform(value: any, args?: any): any {
    return super.transform(value, Constants.DATE_FMT);
  }
}
@Pipe({
  name: 'dateTimeFormat'
})
export class DateTimeFormatPipe extends DatePipe implements PipeTransform {
  override transform(value: any, args?: any): any {
    return super.transform(value, Constants.DATE_TIME_FMT);
  }
}

