import { type HotelDTO } from "./HotelDTO";

export class Hotel {
  private name: string;
  private address: string;
  private price: number;
  constructor(hotel: HotelDTO) {
    this.name = hotel.name;
    this.address = hotel.address;
    this.price = hotel.price;
  }

  public getName(): string {
    return this.name;
  }

  public getAddress(): string {
    return this.address;
  }

  public getPrice(): number {
    return this.price;
  }
}
