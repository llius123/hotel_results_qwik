import { City } from "../domain/City";
import type { CityDTO } from "../domain/CityDTO";

export function fromCityToCityDTO(city: City): CityDTO {
  return {
    id: Math.floor(Math.random() * 1_000_000_000),
    name: city.getName(),
    identifier: city.getIdentifier(),
  };
}

export function fromCityDTOtoCity(cityDTO: CityDTO): City {
  return new City(cityDTO);
}
