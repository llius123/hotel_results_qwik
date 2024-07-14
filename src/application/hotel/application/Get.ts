import type { Hotel } from "../domain/Hotel";
import type { HotelImplementation } from "../implementation/HotelImplementation";
export class HotelApplication {
  constructor() {}

  public async Get(implementation: HotelImplementation): Promise<Hotel[]> {
    return await implementation.getHotels();
  }
}
