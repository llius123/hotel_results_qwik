import {
  component$,
  Resource,
  useResource$,
  useSignal,
} from "@builder.io/qwik";
import getCityByName from "~/hooks/getCityByName";

export default component$(() => {
  const cityForm = useSignal("");

  const cities = useResource$(async ({ track }) => {
    track(() => cityForm.value);
    return await getCityByName(cityForm.value);
  });

  return (
    <>
      <div
        id="1idjzx4d6cq"
        class="bg-background flex h-screen flex-col items-center justify-center"
      >
        <div class="w-full max-w-md">
          <div class="mb-4">
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              for="search"
            >
              Search
            </label>
            <input
              class="ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring border-input bg-background text-foreground mb-4 flex h-10 w-full rounded-md border px-4 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              type="search"
              placeholder="Search products..."
              value={cityForm.value}
              onInput$={(event, element) => (cityForm.value = element.value)}
            />
          </div>
        </div>
        <Resource
          value={cities}
          onPending={() => <div>Loading...</div>}
          onRejected={(error) => <div>Error: {error.message}</div>}
          onResolved={(data) => (
            <div class="grid w-full max-w-md gap-4">
              {data.map((city, index) => (
                <div
                  key={index}
                  class="bg-background flex  items-center gap-4 rounded-md p-2 shadow-md transition-colors"
                >
                  <div class="hover:bg-muted flex w-full items-center justify-between gap-4">
                    <div>
                      <h3 class="text-lg font-medium">{city.name}</h3>
                    </div>
                    <button
                      class="btn"
                      onClick$={async () => {
                        window.location.href =
                          "/hotel_results?city=" + city.identifier;
                      }}
                    >
                      Select
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        />
      </div>
    </>
  );
});
