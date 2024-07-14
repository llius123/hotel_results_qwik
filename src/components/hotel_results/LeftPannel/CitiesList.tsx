import type { ResourceReturn, Signal } from "@builder.io/qwik";
import { $, component$, Resource } from "@builder.io/qwik";
import type { CityDTO } from "~/application/city/domain/CityDTO";
import { useUrl } from "~/components/url/useUrl";

export default component$<{
  cities: ResourceReturn<CityDTO[]>;
  isSearching: Signal<boolean>;
}>(({ cities, isSearching }) => {
  const { updateCity } = useUrl();
  const searchCity = $(async (city: CityDTO) => {
    isSearching.value = false;
    updateCity(city.identifier);
  });
  return (
    <>
      {isSearching.value == true && (
        <Resource
          value={cities}
          onPending={() => <div>Loading...</div>}
          onRejected={(error) => <div>Error: {error.message}</div>}
          onResolved={(data) => (
            <div class="grid gap-1" data-id="8">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="results"
                data-id="9"
              >
                Results
              </label>
              <div class="space-y-2" data-id="10">
                {data.map((city, index) => (
                  <div
                    key={index}
                    class="flex flex-row items-center justify-between"
                  >
                    <p key={index} class="text-center">
                      {city.name}
                    </p>
                    <button
                      class="btn btn-primary"
                      onClick$={() => searchCity(city)}
                    >
                      Select
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        />
      )}
    </>
  );
});
