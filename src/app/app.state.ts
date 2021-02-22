import { Donut } from './models/shop.model';
import { Person } from './models/person.model';
export interface AppState {
  readonly donuts: Donut[];
  person: Person[]
}