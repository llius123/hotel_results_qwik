import { City } from "../../domain/City";
import type { CityDTO } from "../../domain/CityDTO";
import type { CityImplementation } from "../CityImplementation";
import fs from "fs";

const GetAllCities = () =>
  JSON.parse(
    fs.readFileSync("src/db/city_db.json", "utf8"),
  ) as unknown as CityDTO[];

export class CityImplementationLocalFile implements CityImplementation {
  async getCityByName(name: string): Promise<City[]> {
    const AllCities = GetAllCities();
    const citiesDTO = AllCities.filter((city) =>
      city.name.toLowerCase().includes(name.toLowerCase()),
    );
    return citiesDTO.map((city) => new City(city));
  }

  async getCityById(id: number): Promise<City> {
    const AllCities = GetAllCities();
    const cityDTO = AllCities.find((city) => city.id === id);
    if (!cityDTO) {
      throw new Error(`City with id ${id} not found`);
    }
    return new City(cityDTO);
  }
}
