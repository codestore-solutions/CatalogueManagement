import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from '../constants';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateformat',
  pure:true
})
export class DateformatPipe extends DatePipe implements PipeTransform {

  override transform(value: any, args?: any): any {
    return super.transform(value, Constants.DATE_FMT);
  }

}
