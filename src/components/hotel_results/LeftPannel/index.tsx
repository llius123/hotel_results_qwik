import {
  component$,
  useResource$,
  useSignal,
  useTask$,
} from "@builder.io/qwik";
import { useUrl } from "~/components/url/useUrl";
import getCityById from "~/hooks/getCityById";
import getCityByName from "~/hooks/getCityByName";
import CitiesList from "./CitiesList";

export default component$(() => {
  const { city } = useUrl();
  const cityForm = useSignal("");
  const isSearching = useSignal(false);

  useTask$(async () => {
    const cityById = await getCityById(city);
    cityForm.value = cityById.name;
  });

  const cities = useResource$(async ({ track }) => {
    track(() => cityForm.value);
    return await getCityByName(cityForm.value);
  });

  return (
    <div class="flex flex-col">
      <label
        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        for="city"
        data-id="6"
      >
        City
      </label>
      <div class="flex flex-row flex-wrap ">
        <input
          value={cityForm.value}
          onInput$={(event, element) => {
            cityForm.value = element.value;
            isSearching.value = true;
          }}
          class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
      <CitiesList cities={cities} isSearching={isSearching} />
    </div>
  );
});
