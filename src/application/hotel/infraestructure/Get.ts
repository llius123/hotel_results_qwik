import { HotelApplication } from "../application/Get";
import type { HotelDTO } from "../domain/HotelDTO";
import { HotelImplementationLocalFile } from "../implementation/LocalFile/HotelImplementationLocalFile";
import { fromHotelToHotelDTO } from "./TransformData";

export class GetHotels {
  constructor() {}
  public async run(): Promise<HotelDTO[]> {
    const hotelApplication = new HotelApplication();
    const hotels = await hotelApplication.Get(
      new HotelImplementationLocalFile(),
    );
    return hotels.map((hotel) => fromHotelToHotelDTO(hotel));
  }
}
