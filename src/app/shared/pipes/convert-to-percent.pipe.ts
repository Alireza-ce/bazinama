import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToPercent',
})
export class ConvertToPercent implements PipeTransform {
  transform(value: any, args?: any) {
    if (!value) return null;

    return `${value}%`;
  }
}
