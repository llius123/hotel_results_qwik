import { Hotel } from "../../domain/Hotel";
import type { HotelDTO } from "../../domain/HotelDTO";
import type { HotelImplementation } from "../HotelImplementation";
import fs from "fs";

export class HotelImplementationLocalFile implements HotelImplementation {
  async getHotels(): Promise<Hotel[]> {
    const hotelDTO = JSON.parse(
      fs.readFileSync("src/db/hotel_db.json", "utf8"),
    ) as unknown as HotelDTO[];

    // await new Promise((resolve) => setTimeout(resolve, 2500));

    return hotelDTO.map((hotel) => new Hotel(hotel));
  }
}
