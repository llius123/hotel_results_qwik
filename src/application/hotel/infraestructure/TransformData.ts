import { Hotel } from "../domain/Hotel";
import type { HotelDTO } from "../domain/HotelDTO";

export function fromHotelToHotelDTO(hotel: Hotel): HotelDTO {
  return {
    id: Math.floor(Math.random() * 1_000_000_000),
    name: hotel.getName(),
    address: hotel.getAddress(),
    price: hotel.getPrice(),
  };
}

export function fromHotelDTOtoHotel(hotelDTO: HotelDTO): Hotel {
  return new Hotel(hotelDTO);
}
