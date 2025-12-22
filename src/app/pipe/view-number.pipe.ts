import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'viewNumber'
})
export class ViewNumberPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
