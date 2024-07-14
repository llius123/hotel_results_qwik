import type { CityDTO } from "./CityDTO";

export class City {
  private name: string;
  private identifier: number;
  constructor(city: CityDTO) {
    this.name = city.name;
    this.identifier = city.identifier;
  }

  public getName(): string {
    return this.name;
  }

  public getIdentifier(): number {
    return this.identifier;
  }
}
