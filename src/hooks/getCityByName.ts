import { server$ } from "@builder.io/qwik-city";
import { GetByName } from "~/application/city/infraestructure/GetByName";

export default server$(async (cityName: string) => {
  if (cityName.length < 3) return [];
  return await new GetByName().run(cityName);
});
