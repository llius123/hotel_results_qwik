import type { CityImplementation } from "../implementation/CityImplementation";

export class GetCityById {
  constructor(private cityImplementation: CityImplementation) {}

  async run(id: number) {
    return await this.cityImplementation.getCityById(id);
  }
}
