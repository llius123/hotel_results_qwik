import { component$, useResource$, Resource } from "@builder.io/qwik";
import { useOpenModal } from "~/components/reusable/Modal/useOpenModal";
import type { HotelDTO } from "~/application/hotel/domain/HotelDTO";
import { GetHotels } from "~/application/hotel/infraestructure/Get";
import { server$ } from "@builder.io/qwik-city";

export const executeBackendFunction = server$(async () => {
  await new Promise((resolve) => setTimeout(resolve, 2500));

  return await new GetHotels().run();
});
export default component$(() => {
  const hotels = useResource$(() => {
    return executeBackendFunction();
  });

  return (
    <>
      <Resource
        value={hotels}
        onPending={() => <div>Loading...</div>}
        onRejected={(error) => <div>Error: {error.message}</div>}
        onResolved={(hotel) => (
          <div>
            {hotel.map((hotel, index) => {
              return <HotelCard key={index} hotel={hotel} />;
            })}
          </div>
        )}
      />
    </>
  );
});

const HotelCard = component$(
  ({ hotel, key }: { hotel: HotelDTO; key: number }) => {
    return (
      <div
        key={key}
        class="bg-card text-card-foreground mb-4 flex items-center rounded-lg border shadow-sm"
        data-v0-t="card"
      >
        <HotelImageCard hotelSrc="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" />
        <HotelBodyCard {...hotel} />
      </div>
    );
  },
);

const HotelImageCard = component$<{ hotelSrc: string }>(({ hotelSrc }) => (
  <figure>
    <img
      width={200}
      height={200}
      src={hotelSrc}
      alt="TODO"
      class="h-24 w-24 rounded-l-md"
    />
  </figure>
));

const HotelBodyCard = component$<HotelDTO>(({ address, name, price }) => {
  const openModal = useOpenModal();
  return (
    <>
      <div class="flex-1 p-4">
        <h3 class="text-xl font-bold">{name}</h3>
        <p>{address}</p>
      </div>
      <div
        class="focus:ring-ring inline-flex w-fit items-center whitespace-nowrap rounded-full rounded-r-md border border-transparent bg-[#4b00ff] p-2 text-xs font-semibold text-white transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2"
        data-v0-t="badge"
        onClick$={openModal}
      >
        {price}
      </div>
    </>
  );
});
