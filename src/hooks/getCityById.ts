import { server$ } from "@builder.io/qwik-city";
import { GetById } from "~/application/city/infraestructure/GetById";

export default server$(async (cityId: number) => {
  return await new GetById().run(cityId);
});
