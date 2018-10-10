import { Pipe, PipeTransform } from '@angular/core';
import { Location } from '../models/location';

@Pipe({
  name: 'locationsFilter'
})
export class LocationsFilterPipe implements PipeTransform {

  transform(value: Location[], filter: any): any {
    if (!value || !filter) {
      return value;
    }
    return value.filter((area) =>
      `${area.state}, ${area.name}`.toLowerCase().indexOf(filter.toLowerCase()) > -1);
  }

}
