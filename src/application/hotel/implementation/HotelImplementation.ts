import type { Hotel } from "../domain/Hotel";

export interface HotelImplementation {
  getHotels(): Promise<Hotel[]>;
}
