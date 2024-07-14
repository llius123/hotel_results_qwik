import type { City } from "../domain/City";

export interface CityImplementation {
  getCityByName(name: string): Promise<City[]>;
  getCityById(id: number): Promise<City>;
}
