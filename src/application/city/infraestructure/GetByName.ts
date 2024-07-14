import { GetCityByName } from "../application/GetCityByName";
import type { CityDTO } from "../domain/CityDTO";
import { CityImplementationLocalFile } from "../implementation/LocalFile/CityImplementationLocalFile";
import { fromCityToCityDTO } from "./TransformData";

export class GetByName {
  async run(name: string): Promise<CityDTO[]> {
    const cities = await new GetCityByName(
      new CityImplementationLocalFile(),
    ).run(name);
    return cities.map((city) => fromCityToCityDTO(city));
  }
}
