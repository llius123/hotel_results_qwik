import type { CityImplementation } from "../implementation/CityImplementation";

export class GetCityByName {
  constructor(private cityImplementation: CityImplementation) {}
  async run(name: string) {
    return await this.cityImplementation.getCityByName(name);
  }
}
