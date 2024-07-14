import { GetCityById } from "../application/GetCityById";
import type { CityDTO } from "../domain/CityDTO";
import { CityImplementationLocalFile } from "../implementation/LocalFile/CityImplementationLocalFile";
import { fromCityToCityDTO } from "./TransformData";

export class GetById {
  async run(id: number): Promise<CityDTO> {
    return fromCityToCityDTO(
      await new GetCityById(new CityImplementationLocalFile()).run(id),
    );
  }
}
