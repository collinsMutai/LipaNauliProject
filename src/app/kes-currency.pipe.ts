import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kesCurrency',
})
export class KesCurrencyPipe implements PipeTransform {
  transform(
    value: number | string,
    currencyCode: string = 'KES',
    locale: string = 'en-KE'
  ): string {
    if (value == null) return '';

    const amount = typeof value === 'string' ? parseFloat(value) : value;

    if (isNaN(amount)) return '';

    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currencyCode,
    }).format(amount);
  }
}
