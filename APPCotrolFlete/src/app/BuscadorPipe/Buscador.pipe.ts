import { Pipe, PipeTransform } from '@angular/core';

import { Coleccion } from './Coleccion';

@Pipe({
    name: 'Buscador',
    pure: false
})
export class BuscadorPipe implements PipeTransform {
  transform(items: Coleccion[], filter: Coleccion): Coleccion[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Coleccion) => this.applyFilter(item, filter));
  }
  
  /**
   * Perform the filtering.
   * 
   * @param {Coleccion} Coleccion The Coleccion to compare to the filter.
   * @param {Coleccion} filter The filter to apply.
   * @return {boolean} True if Coleccion satisfies filters, false if not.
   */
  applyFilter(Coleccion: Coleccion, filter: Coleccion): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (Coleccion[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (Coleccion[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }
}